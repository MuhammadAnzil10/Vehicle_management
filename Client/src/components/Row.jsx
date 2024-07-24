

const Row = (prop)=>{
console.log("vehiclesind",prop.vehicles);
const user = localStorage.getItem('userInfo')
const userObj = JSON.parse(user)

  return(
  <>
   {
        prop.vehicles.map((vehicle)=>{
          return(
            <tr key={vehicle._id}>
            <td >{vehicle.name}</td>
            <td >{vehicle.description}</td>
            <td >{vehicle.price}</td>
            <td >{vehicle.manufacture}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.image}</td>
            {userObj && (<>
              <td>Edit</td>
              <td>Delete</td></>)}
            </tr>
          )
        })
      }
  </>
   
     

 
  )
}

export default Row;