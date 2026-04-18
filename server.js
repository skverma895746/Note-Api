const app = require("./src/app");
const connectionDB = require("./src/db/db");
const port = 7000;
connectionDB();

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})

