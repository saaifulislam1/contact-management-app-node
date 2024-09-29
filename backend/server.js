const express= require('express');
const dotenv=require('dotenv').config()
const app = express();
const port = process.env.PORT ||5000;

app.use("/api/contacts", require("./routes/ConttactRoute"))


app.listen(port,()=>{
    console.log(`server is listning on port ${port}`)
})