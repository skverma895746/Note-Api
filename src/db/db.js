const mongoose = require("mongoose");
async function connectionDB()
{
    await mongoose.connect("mongodb+srv://skverma895746_db_user:abcdefg@cluster0.xmtr5nt.mongodb.net/sandeep");
    console.log("mongoDB connected");
}
module.exports = connectionDB;