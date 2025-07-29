// src/routes/homeRoutes.js
const express = require('express');
const router = express.Router();
const { requireLogin } = require('../middleware/authMiddleware');

router.get('/', requireLogin, (req, res) => {
  res.json({ message: `Welcome to your homepage! User ID: ${req.session.userId}` });
});

module.exports = router;
