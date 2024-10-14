const asyncHandler = require("express-async-handler");
// Register User
// @acess public
// route -> POST /api/users/contact
const registerUser = asyncHandler(async (req, res) => {
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
