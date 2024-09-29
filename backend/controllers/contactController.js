const asyncHandler = require("express-async-handler");

// Get all the contacts
// @acess public
// route -> GET /api/contacts
const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "all the contacts" });
});
// Create New  contacts
// @acess public
// route -> POST /api/contacts
const createContact = asyncHandler((req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Craeate contact" });
});
// GET single contact
// @acess public
// route -> GET /api/contacts/:id
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact  for ${req.params.id}` });
});
// Update single contact
// @acess public
// route -> PUT /api/contacts/:id
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact  for ${req.params.id}` });
});
// Delete single contact
// @acess public
// route -> DEL /api/contacts/:id
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact  for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
