
const app = require("./src/app");
const connectionDB = require("./src/db/db");
const PORT= process.env.PORT || 7000;



connectionDB();

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

