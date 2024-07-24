
const bcrypt = require("bcrypt");


const validatePassword = (password,encryptedPassword)=>{
return bcrypt.compare(password,encryptedPassword)
}

module.exports = {
  validatePassword,
}