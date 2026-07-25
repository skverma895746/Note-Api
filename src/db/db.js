const mongoose = require("mongoose");
async function connectionDB()
{
    await mongoose.connect(process.env.MONGO_URI)
     console.log("mongoDB connected");
}
module.exports = connectionDB;