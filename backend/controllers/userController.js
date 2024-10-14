const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
// Register User
// @acess public
// route -> POST /api/users/contact
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are necessary");
  }
  // check if user already exist or not
  const userAvailavle = await User.findOne({ email });
  if (userAvailavle) {
    res.status(400);
    throw new Error("Email Already exist");
  }
  // password hasing
  const hasedPassword = await bcrypt.hash(password, 10);
  const user = User.create({
    username,
    email,
    password: hasedPassword,
  });
  console.log(user, "User Created");
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the user" });
});
// Login User
// @acess public
// route -> POST /api/users/contact
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login the user" });
});
// Current User
// @acess public
// route -> POST /api/users/contact
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current User Information" });
});

module.exports = { registerUser, loginUser, currentUser };
