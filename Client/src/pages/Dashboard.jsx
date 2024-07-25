import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Table from "../components/Table";
import "./Dashboard.css"
import { useEffect, useState } from "react";
import filterData from "../utils/filterData.js";

const Dashboard = ()=>{
const headings = ["No","Name","Description","Price","Manufatcure","Model","Image","Actions"]
const [vehicles, setVehicles] = useState([])
const [searchText, setSearchText] = useState('');

  useEffect(()=>{
    if(vehicles.length < 1)
    fetchData();
  },[vehicles])
  const fetchData = async()=>{
    console.log("");
    const response = await fetch("/api/vehicles");
    const data = await response.json()
   setVehicles(data.vehicles)
  }
 
 const filteredData =  filterData(vehicles,searchText);
 
  return (
    <div className="wrapper">
     <Header/>
     <Searchbar searchText={searchText} setSearchText={setSearchText} />
     {vehicles.length > 0 && <Table headings={headings} data={filteredData} isAdmin/>}
    </div>
  )
}


export default Dashboard;