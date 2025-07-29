const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { encrypt } = require('../utils/encryption');
const { getHashFromRole } = require('../utils/roles');

const prisma = new PrismaClient();

async function createSuperadmin() {
  const email = 'rinorbad@gmail.com';
  const password = 'LenovoLegion5.';
  const role = 'superadmin';
  const roleHash = getHashFromRole(role);

  const hashedPassword = await bcrypt.hash(password, 10);

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log('❌ Superadmin already exists');
    return;
  }

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      birthday: new Date('1990-01-01'),
      sex: 'F',
      state: 'NY',
      phone: encrypt('1234567890'),
      firstName: encrypt('Super'),
      lastName: encrypt('Admin'),
      roleHash,
    }
  });

  console.log('✅ Superadmin created:', user.email);
}

createSuperadmin().finally(() => prisma.$disconnect());
