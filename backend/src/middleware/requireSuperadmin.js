const { PrismaClient } = require('@prisma/client');
const { getRoleFromHash } = require('../utils/roles');

const prisma = new PrismaClient();

async function requireSuperadmin(req, res, next) {
  try {
    const userId = req.session.userId;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const role = getRoleFromHash(user.roleHash);
    if (role !== 'superadmin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    next();
  } catch (err) {
    console.error('requireSuperadmin error:', err);
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports = requireSuperadmin;
