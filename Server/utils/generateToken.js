const jwt = require("jsonwebtoken")

const secret =process.env.TOKEN_SECRET;

const generateToken = (res,id)=>{

   const token = jwt.sign({id},secret,{expiresIn:"10d"});
   res.cookie("token",token);
}


module.exports = generateToken;


