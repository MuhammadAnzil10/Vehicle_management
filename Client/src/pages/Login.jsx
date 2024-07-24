import { useState } from "react";
import "./Login.css"
import validateInput from "../utils/validateInput.js";

const Login = ()=>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
   const isValid =  validateInput(email,password);
   if(!isValid){
    return alert("Enter valid input");
     }

     authnticateLogin();

    
  }
  const authnticateLogin = async()=>{
    try {
      const response = await fetch("http://localhost:3008/api/admin/login",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({email,password})
      })
      const data = await response.json();
      console.log(data);
      if(!data.status){
        return alert("Login failed")
      }
      alert("login success")
    } catch (error) {
      alert("login failed")
    }
  }
  return (
    <div className="form-wrapper">
      
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;

