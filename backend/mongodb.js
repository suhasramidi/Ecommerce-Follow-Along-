const mongoose = require('mongoose');

 async function connect(){
    try {
       await mongoose.connect("mongodb+srv://akulkarthikeya006:02eo1eRont4GCs59@cluster0.eo7z7.mongodb.net/")

    }catch(error){
        console.log("Error in connecting to database", error);
    }
 }

 module.exports = connect;