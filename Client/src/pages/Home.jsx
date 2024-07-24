import Searchbar from "../components/Searchbar";
import Table from "../components/Table";
import "./Home.css"

const Home = ()=>{
  const row = ["Name","Description","Price","Manufatcure","Model","Image"]

  return (
    <div className="home-wrapper">
      <Searchbar />
      <Table row={row} />
    </div>
  )
}

export default Home;
