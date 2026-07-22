require("dotenv").config();
const app = require("./src/app");
const connectionDB = require("./src/db/db");
const port = process.env.PORT || 7000;
connectionDB();

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

