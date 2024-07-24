import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Table from "../components/Table";
import "./Dashboard.css"

const Dashboard = ()=>{
const row = ["Name","Description","Price","Manufatcure","Model","Image","Actions"]

  return (
    <div className="wrapper">
     <Header/>
     <Searchbar />
     <Table row={row} />
    </div>
  )
}


export default Dashboard;