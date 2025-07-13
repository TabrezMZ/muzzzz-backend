const jwt = require('jsonwebtoken');
const { error } = require('../utils/response');

// Middleware to authenticate user requests
// It checks for a valid JWT token in the Authorization header
module.exports = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json(error("Access denied, token missing"));

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json(error("Invalid token", err.message));
  }
};
