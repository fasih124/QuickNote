const { hash } = require("bcrypt");
const User = require("../models/userModel");
const dcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bycrpt.hash(password, 10);
    const user = await User.create({ name, email, password: hashPassword });
    res.status(201).json({ massage: "user register", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bycrpt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.massage });
  }
};
