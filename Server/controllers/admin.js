const Admin = require("../models/adminMode.js");
const Vehicle = require("../models/vehicleModel.js");
const generateToken = require("../utils/generateToken.js");
const { validatePassword } = require("../utils/validatePassword.js");

const loginAuthentication = async (req, res) => {
  try {
    const { email, password } = req.body;
  const admin = await Admin.findOne({ email: email });
  if(!admin){
    return res.status(400).json({status:false,error: "Invalid Credentials" })
  }
  const validPassword =await validatePassword(password,admin.password)
  if(!validPassword){
    return res.status(400).json({status:false,error: "Invalid Credentials" })
  }
  generateToken(res,admin._id);
  const {password:Password,...rest} = admin._doc
  return res.status(200).json({status:true,admin:rest})
  } catch (error) {
    res.status(500).json({status:false,error:error.message})
  }
};

const addVehicle = async(req,res)=>{
  try {
    const newVehicle = await Vehicle.create(req.body);
    return res.status(200).json({status:true,vehicle:newVehicle})
  } catch (error) {
    res.status(500).json({status:false,error:error.message}) 
  }
}

const editVehicle = async(req,res)=>{

    try {
        const {id, name, description, price, manufacture, model, image} = req.body;
      const vehicle = await Vehicle.findOne({_id:id});
      if(!vehicle){
        return res.status(400).json({status:false,error:"Vehicle not found" })
      }
      vehicle.name = name || vehicle.name;
      vehicle.description = description || vehicle.description;
      vehicle.price = price || vehicle.price;
      vehicle.manufacture = manufacture || vehicle.manufacture;
      vehicle.model = model || vehicle.model;
      vehicle.image = image || vehicle.image;
      await vehicle.save();
      return res.status(200).json({status:true,vehicle:vehicle});
    } catch (error) {
      res.status(500).json({status:false,error:error.message})
    }
}


const removeVehicle = async(req,res)=>{
try {
  const {id} = req.body;
  const vehicle = await Vehicle.deleteOne({_id:id})
  res.status(200).json({status:true,message:"removed successfully"});

} catch (error) {
  res.status(500).json({status:false,error:error.message})
}
}


const getAllVehicles =async(req,res)=>{

  try {
        const vehicles = await Vehicle.find();
        res.status(200).json({status:true,vehicles:vehicles})
  } catch (error) {
    res.status(500).json({status:false,error:error.message})
  }
}

module.exports = {
  loginAuthentication,
  addVehicle,
  editVehicle,
  removeVehicle,
  getAllVehicles
};
