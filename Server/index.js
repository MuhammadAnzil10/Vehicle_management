const express = require("express");
const app = express()
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const cors = require("cors")
const cookieParser = require("cookie-parser")
dotenv.config()
const port = 3008;
const dbConnect = require("./config/db.js")
const adminRouter =require("./routers/admin.routes.js")
const userRoutes =  require("./routers/user.routes.js")
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cookieParser())
app.use(cors())
const url = process.env.MONGOOSE_URI;

dbConnect(url)
app.get("/",async (req,res)=>{

  res.send("Testing....")
})

app.use('/api',userRoutes)
app.use("/api/admin",adminRouter)

app.listen(port,()=>{
  console.log(`Server running on port ${port}`);
})