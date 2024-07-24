import Dashboard from "./pages/Dashboard"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Home from "./pages/Home.jsx"

function App() {


  return (
 <BrowserRouter>

   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/admin/dashboard" element={<Dashboard />} />
    <Route path="/admin/login" element={<Login />} />
   </Routes>

 </BrowserRouter>
  )
}

export default App
