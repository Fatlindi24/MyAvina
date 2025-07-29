const roleMap = {
  [process.env.ROLE_HASH_PATIENT]: 'patient',
  [process.env.ROLE_HASH_DOCTOR]: 'doctor',
  [process.env.ROLE_HASH_SUPERADMIN]: 'superadmin'
};

const roleToHash = {
  patient: process.env.ROLE_HASH_PATIENT,
  doctor: process.env.ROLE_HASH_DOCTOR,
  superadmin: process.env.ROLE_HASH_SUPERADMIN
};

function getRoleFromHash(hash) {
  return roleMap[hash] || null;
}

function getHashFromRole(role) {
  return roleToHash[role] || null;
}

module.exports = {
  getRoleFromHash,
  getHashFromRole,
  roleMap,
  roleToHash
};
