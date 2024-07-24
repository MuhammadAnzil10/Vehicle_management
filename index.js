const express = require("express");
const app = express()
const bcrypt = require("bcrypt");
const port = 3008;
const dbConnect = require("./Server/config/db.js")
const adminRouter =require("./Server/routers/admin.routes.js")

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const url = "mongodb+srv://anzil:12345@cluster0.os9ctu3.mongodb.net/vehicle_management?retryWrites=true&w=majority&appName=Cluster0"
dbConnect(url)
app.get("/",async (req,res)=>{

  res.send("Testing....")
})

app.use("/admin",adminRouter)

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
})