
const filterData =(vehicles, searchText)=>{
  const filteredData = vehicles.filter(vehicle => {
    const lowerCaseSearchTerm = searchText.toLowerCase();
    return (
      vehicle.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      vehicle.model.toLowerCase().includes(lowerCaseSearchTerm) ||
      vehicle.price.toString().includes(lowerCaseSearchTerm) ||
      vehicle.manufacture.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
  return filteredData
}

export default filterData;