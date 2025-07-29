const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { encrypt, decrypt } = require('../utils/encryption');
const { getRoleFromHash, getHashFromRole } = require('../utils/roles');

const prisma = new PrismaClient();

async function registerUser(req, res) {
  const {
    email,
    password,
    confirmPassword,
    birthday,
    sex,
    state,
    phone,
    firstName,
    lastName,
    role = 'patient' // default role
  } = req.body;

  if (!email || !password || password !== confirmPassword) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  if (sex === 'M') {
    return res.status(403).json({ message: 'We only treat female patients' });
  }

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return res.status(400).json({ message: 'Email already used' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const roleHash = getHashFromRole(role);

  if (!roleHash) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      birthday: new Date(birthday),
      sex,
      state,
      phone: encrypt(phone),
      firstName: encrypt(firstName),
      lastName: encrypt(lastName),
      roleHash
    }
  });

  req.session.userId = user.id;

  res.status(201).json({ message: 'Registered successfully', userId: user.id });
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(403).json({ message: 'Invalid credentials' });
  }

  req.session.userId = user.id;

  res.json({
    message: 'Login successful',
    user: {
      id: user.id,
      email: user.email,
      firstName: decrypt(user.firstName),
      lastName: decrypt(user.lastName),
      role: getRoleFromHash(user.roleHash),
    }
  });
}

function logoutUser(req, res) {
  req.session.destroy(() => {
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Logged out' });
  });
}

async function getMe(req, res) {
  try {
    const userId = req.session.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Not logged in' });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      id: user.id,
      email: user.email,
      firstName: decrypt(user.firstName),
      lastName: decrypt(user.lastName),
      birthday: user.birthday,
      sex: user.sex,
      state: user.state,
      phone: decrypt(user.phone),
      role: getRoleFromHash(user.roleHash)
    });
  } catch (err) {
    console.error('getMe error:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getMe
};
