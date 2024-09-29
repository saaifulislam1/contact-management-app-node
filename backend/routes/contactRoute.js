const express= require ('express')
const router= express.Router();

// get all the contacts
router.route("/").get((req,res) =>{
    res.status(200).json({message:"all the contacts"})
});
// creatre contact
router.route("/").post((req,res) =>{
    res.status(200).json({message:"Craeate contact"})
});
// get single contact
router.route("/:id").get((req,res) =>{
    res.status(200).json({message:`Get contact  for ${req.params.id}`})
});
// Update single contact
router.route("/:id").post((req,res) =>{
    res.status(200).json({message:`Update Contact  for ${req.params.id}`})
});
// delete single contact
router.route("/:id").delete((req,res) =>{
    res.status(200).json({message:`Delete contact  for ${req.params.id}`})
});

module.exports= router

