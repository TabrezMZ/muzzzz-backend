const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { success, error } = require('../utils/response');


// Controller for user authentication
exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json(error("Email already registered"));

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hash });

    return res.status(201).json(success("User registered successfully", { id: newUser._id }));
  } catch (err) {
    return res.status(500).json(error("Registration failed", err.message));
  }
};

// Login user and return JWT token
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json(error("Invalid email"));

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json(error("Invalid password"));

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return res.json(success("Login successful", { token }));
  } catch (err) {
    return res.status(500).json(error("Login failed", err.message));
  }
};
