const express= require ('express')
const router= express.Router();

router.route("/").get((req,res) =>{
    res.status(200).json({message:"all the contacts"})
});

module.exports= router

