import Header from "../components/Header";
import Searchbar from "../components/Searchbar";
import Table from "../components/Table";
import "./Dashboard.css";
import { useEffect, useState } from "react";
import filterData from "../utils/filterData.js";

const Dashboard = () => {
  const headings = [
    "No",
    "Name",
    "Description",
    "Price",
    "Manufatcure",
    "Model",
    "Image",
    "Actions",
  ];
  const [vehicles, setVehicles] = useState([]);
  const [currentItem, setCurrentItem] = useState({});
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (vehicles.length < 1) fetchData();
  }, [vehicles]);

  const fetchData = async () => {
    const response = await fetch("/api/vehicles");
    const data = await response.json();
    setVehicles(data.vehicles);
  };

  const onEdit = (item) => {
    console.log("item", item);
    setCurrentItem(item);
    setShowModal(true);
  };
  const onRemove = async (id) => {
    try {
      const response = await fetch("/api/admin/remove-vehicle", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      if (data.status) {
        setVehicles(vehicles.filter((vehicle) => vehicle._id !== id));
      }
    } catch (error) {
      alert("Error occured", error.message);
    }
  };

  const filteredData = filterData(vehicles, searchText);

  return (
    <div className="wrapper">
      <Header />
      <Searchbar searchText={searchText} setSearchText={setSearchText} />
      {vehicles.length > 0 && (
        <Table
          setVehicles={setVehicles}
          setCurrentItem={setCurrentItem}
          showModal={showModal}
          currentItem={currentItem}
          setShowModal={setShowModal}
          headings={headings}
          data={filteredData}
          isAdmin
          onRemove={onRemove}
          onEdit={onEdit}
        />
      )}
    </div>
  );
};

export default Dashboard;
