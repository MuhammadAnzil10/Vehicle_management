const express = require("express");
const app = express()
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser")
dotenv.config()
const port = 3008;
const dbConnect = require("./Server/config/db.js")
const adminRouter =require("./Server/routers/admin.routes.js")

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser())
const url = process.env.MONGOOSE_URI;

dbConnect(url)
app.get("/",async (req,res)=>{

  res.send("Testing....")
})

app.use("/admin",adminRouter)

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
})