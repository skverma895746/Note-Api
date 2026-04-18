const express = require("express");
const Usermodel = require("./model/model")
const path = require("path")
const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));
// post method
app.post("/api",async (req,res)=>{
   try{
       await Usermodel.create(req.body)
    res.status(201).json({
        message:"Data send successfully"
    });
   } 
  catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message
    });
}
});
// get method 
app.get("/api",async (req,res)=>{
    try{
    const data = await Usermodel.find()
    res.status(200).json({
        message:"data fetch successfully",
        data:data
    });
}  catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message
    });
}
});
//delete method 
app.delete("/api/:id",async (req,res)=>{
    try{
    const data = await Usermodel.findByIdAndDelete(req.params.id)
    res.status(200).json({
        message:"data deteled successfully",
    });
}
  catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message
    });
}
});
// update method 
app.patch("/api/:id",async (req,res)=>{
    try{
    const data = await Usermodel.findByIdAndUpdate(req.params.id,{$set:req.body},{returnDocument: "after"
})
    res.status(200).json({
        message:"data updated successfully",
    });
}  catch (error) {
    res.status(500).json({
      message: "error",
      error: error.message
    });
}
});


module.exports= app;