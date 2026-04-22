const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

// REGISTER
exports.register = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { name, email, password } = req.body;   
      // check existing user
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      } 
      // hash password
      const hashedPassword = await bcrypt.hash(password, 10);   
      // create user
      await User.create({
        name,
        email,
        password: hashedPassword
      });   
      res.status(201).json({ message: "User registered successfully" });    
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

// LOGIN
exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body; 
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      } 
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      } 
      // create token
      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );    
      res.json({ token });  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};