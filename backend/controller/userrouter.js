const express = require("express");
const userRouter = express.Router();
const uploadUserImage=require("../middlewares/multer");
const {userModel} = require("../models/userModel");
const bcrypt = require("bcryptjs");

userRouter.post("/signup",uploadUserImage.single("image"),async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        if(name!=""|| email!=""|| password!=""){
            return res.status(400).send({message:"All fields are required"});
        }
        const user =await userModel.findOne({email:email});
        if(user){
            return res.status(200).send({message:"User Already Exists"});
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);


        const newUser = await userModel.insertOne({name,email,password:hash});

        return res.status(200).send({message:"User registered successfully"})

    }catch (error) {
        return res.status(500).send({message:"Something went wrong"});
    }
})

userModel.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        if( email!=""|| password!=""){
            return res.status(400).send({message:"All fields are required"});
        }

        
        const user =await userModel.findOne({email});
        const matchedPass = bcrypt.compareSync(password, hash);
        if(user && matchedPass){
            return res.status(200).send({message:"User logged in sucessfully"});
        }

        return res.status(401).send({message:"Entered details are wrong"});

    }catch(error){
        return res.status(500).send({message:"Something went wrong"});
    }
    
})



module.exports = userRouter;