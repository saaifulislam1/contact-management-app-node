const express= require ('express')
const router= express.Router();
const {getContacts, createContact, getContact, updateContact, deleteContact, }=require('../controllers/contactController')

// get all the contacts
router.route("/").get(getContacts)
// creatre contact
router.route("/").post(createContact);
// get single contact
router.route("/:id").get(getContact);
// Update single contact
router.route("/:id").post(updateContact);
// delete single contact
router.route("/:id").delete(deleteContact);

module.exports= router

