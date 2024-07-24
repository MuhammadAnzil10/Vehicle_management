import Dashboard from "./pages/Dashboard"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./pages/Login.jsx"

function App() {


  return (
 <BrowserRouter>

   <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/admin/login" element={<Login />} />
   </Routes>

 </BrowserRouter>
  )
}

export default App
