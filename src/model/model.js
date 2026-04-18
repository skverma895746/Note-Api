const mongoose = require("mongoose");
const Userschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const Usermodel = mongoose.model("User",Userschema);
module.exports = Usermodel;