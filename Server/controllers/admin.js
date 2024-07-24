const Admin = require("../models/adminMode.js");
const { validatePassword } = require("../utils/validatePassword.js");

const loginAuthentication = async (req, res) => {
  const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email });
  console.log(req.body);
  console.log(admin)
  if(!admin){
    return res.status(400).json({status:false,error: "Invalid Credentials" })
  }
  const validPassword =await validatePassword(password,admin.password)
  if(!validPassword){
    return res.status(400).json({status:false,error: "Invalid Credentials" })
  }
  
  const {password:Password,...rest} = admin._doc
  return res.status(200).json({status:true,admin:rest})
};

module.exports = {
  loginAuthentication,
};
