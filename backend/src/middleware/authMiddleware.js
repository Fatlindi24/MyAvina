// src/middleware/authMiddleware.js
exports.requireLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Unauthorized. Please login.' });
  }
  next();
};
