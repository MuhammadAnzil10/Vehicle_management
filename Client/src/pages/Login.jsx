 import { useState } from "react";
 import { useNavigate } from "react-router-dom";
import "./Login.css";
 import validateInput from "../utils/validateInput.js";
 import {Button, Form, Spinner} from 'react-bootstrap';



 const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [check, setCheck] = useState(false)
   const [loading, isLoading] = useState(false)
   const navigate = useNavigate();

   const handleSubmit = (e) => {
     e.preventDefault();
     isLoading(true);
     const isValid = validateInput(email, password);
     if (!isValid) {
      isLoading(false);
       return alert("Enter valid input");
     }

     authenticateLogin();
   };
   const authenticateLogin = async () => {
     try {
       const response = await fetch("/api/admin/login", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ email, password }),
       });
       const data = await response.json();
       console.log(data);
       if (!data.status) {
        isLoading(false);
         return alert("Login failed");
       }
      
       const strData = JSON.stringify(data);
       localStorage.setItem("userInfo", strData);
       isLoading(false);
       navigate("/");
       alert("login success");
     } catch (error) {
      isLoading(false);
       alert("login failed");
     }
   };
const handleCheck = ()=>{
  setCheck(!check)
}
return (
  <div className='container'>
    <h1>Login</h1>
    <div className="form-wrapper">
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail" >
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type={check ? "text" : "password"} placeholder="Password" autoComplete="false" onChange={(e)=>setPassword(e.target.value)} />
      <Form.Check type="checkbox" id="password"  label="Show password" onClick={handleCheck} />
    </Form.Group>
    <Button variant="primary"  type="submit">
      {loading ? <Spinner variant="primary" animation="boarder" /> : "Submit"}
    </Button>
  </Form>
    </div>
  </div>
 
);
};


export default Login;
