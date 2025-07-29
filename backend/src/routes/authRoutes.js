const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser, getMe } = require('../controllers/authController');
const { requireLogin } = require('../middleware/authMiddleware'); // this is your session checker

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/me', requireLogin, getMe);
router.get('/session-info', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Not logged in' });
  }

  const now = Date.now();
  const createdAt = req.session.cookie._startTime?.getTime?.() || req.session.createdAt || now;
  const expiresAt = createdAt + req.session.cookie.maxAge;

  res.json({
    userId: req.session.userId,
    firstName: req.session.firstName, // if you store it during login
    expiresAt,
    now,
    remainingMs: Math.max(0, expiresAt - now),
  });
});

module.exports = router;
