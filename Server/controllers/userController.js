const Vehicle = require("../models/vehicleModel")


const getAllVehicles = async(req,res)=>{
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json({staus:true,vehicles});
    
  } catch (error) {
    res.status(400).json({staus:false,error:error.message});
    
  }

}


module.exports = {
  getAllVehicles,
}