const express=require("express");
const verifyToken=require("../middleware/authMiddleware")
const router=express.Router();

//only admin
router.get("/admin",verifyToken,(req,res)=>{
    res.json({message : "Welcome Admin"})
})
//manager and admin
router.get("/manager",(req,res)=>{
    res.json({message : "Welcome Manager"})
})
//all can access
router.get("/user",(req,res)=>{
    res.json({message : "Welcome User"})
})

module.exports=router;