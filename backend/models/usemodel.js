const mongoose = require('mongoose');

  const schema = mongoose.schema({
         name:{type:String, reqired:true},
         email:{type:String, required:true},
         password:{type:String, reqired : true},
         image:{type:String}
  })


  const userModel = mongoose.model("users", schema);

  module.exports = userModel;