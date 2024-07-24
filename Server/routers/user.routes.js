
const express = require("express");

const userRouter = express.Router()
const userController = require("../controllers/userController.js")

userRouter.get('/vehicles',userController.getAllVehicles);



module.exports = userRouter;