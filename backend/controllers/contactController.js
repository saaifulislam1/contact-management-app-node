// Get all the contacts
// @acess public
// route -> GET /api/contacts
const getContacts =((req,res) =>{
    res.status(200).json({message:"all the contacts"})
});
// Create New  contacts
// @acess public
// route -> POST /api/contacts
const createContact =((req,res) =>{
    res.status(201).json({message:"Craeate contact"})
});
// GET single contact
// @acess public
// route -> GET /api/contact/:id
const getContact =((req,res) =>{
    res.status(200).json({message:`Get contact  for ${req.params.id}`})
});
// Update single contact
// @acess public
// route -> PUT /api/contact/:id
const updateContact =((req,res) =>{
    res.status(200).json({message:`Update Contact  for ${req.params.id}`})
});
// Delete single contact
// @acess public
// route -> DEL /api/contact/:id
const deleteContact =((req,res) =>{
    res.status(200).json({message:`Delete contact  for ${req.params.id}`})
});





module.exports={getContacts, createContact, getContact, updateContact, deleteContact}