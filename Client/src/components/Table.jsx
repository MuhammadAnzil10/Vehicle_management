
import "./Table.css";
import Row from "./Row";
import { useEffect, useState } from "react";
const Table = (prop)=>{
  
const [vehicles, setVehicles] = useState([])

  useEffect(()=>{
    if(vehicles.length < 1)
    fetchData();
  },[vehicles])
  const fetchData = async()=>{
    console.log("");
    const response = await fetch("http://localhost:3008/api/vehicles");
    const data = await response.json()
   setVehicles(data.vehicles)
  }
  return(
    <div className="table-container">
       <table className="table">
       <thead>
        <tr>
        {prop.row.map((field)=>{
          return(
            <th key={field}>{field}</th>
          )
        })}
        </tr>
       </thead>
        <tbody>
        {vehicles.length > 0 && <Row vehicles={vehicles}/> }
        </tbody>
       </table>
    </div>
  )
}

export default Table;