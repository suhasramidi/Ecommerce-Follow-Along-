const express = require('express');

 const userRouter= express.Router();

 const uploadUserImage = require("../middlewares/multer");

 const {userModel} = require("../models/userModel");

 userRouter.post("/signup",uploadUserImage.single("image"), async(request, response)=>{
    try {
        const {name, email, password} = request.body;
        if(name!="" || email !="" || password !=""){
            return response.status(400).send({message: "All fields are required"});
        }

        const user = await userModel.findOne({email:email});
        if(user){
            return response.status(200).send({message: "User already exists"});
        }

        const newUser = await userModel.insertOne({name, email, password});
        return response.status(200).send({message: "User registered successfully."});




    }catch(error){
        response.status(500).send({message: "Something went wrong"});
    }
 })

 userModel.post("/login", async(request, response)=>{
    try {
        const {email, password} = request.body;
        if(email !="" || password !=""){
            return response.status(400).send({message: "All fields are required"});
        }

        const user = await userModel.findOne({email:email, password:password});
        if(user){
            return response.status(200).send({message: "User already exists"});
        }

        
        return response.status(200).send({message: "User logged in  successfully."});




    }catch(error){
        response.status(500).send({message: "Something went wrong"});
    }
 })
  





 module.exports = userRouter;