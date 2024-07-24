
const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  manufacture:{
    type:String,
    required:true
  },
  model:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
date:{
  type:Date,
  default:Date.now
}
  
})


module.exports = mongoose.model("vehicle",vehicleSchema);
