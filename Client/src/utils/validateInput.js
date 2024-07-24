

const validateInput =(email,password)=>{

  if(email.trim().length < 1 || password.trim().length < 1){
    return false
  }
  return true;
}

export default validateInput;