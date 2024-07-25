import Searchbar from "../components/Searchbar";
import Table from "../components/Table";
import filterData from "../utils/filterData";
import "./Home.css";
import { useState, useEffect } from "react";

const Home = ()=>{
  const [vehicles, setVehicles] = useState([]);
  const [searchText, setSearchText] = useState('');
  const headings = ["No","Name","Description","Price","Manufatcure","Model","Image"];
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

 const filteredData = filterData(vehicles,searchText)

  return (
    <div className="home-wrapper">
      <Searchbar searchText={searchText} setSearchText={setSearchText}  />
      <Table headings={headings} data={filteredData} />
    </div>
  )
}

export default Home;
