const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/admin.js");
const validate = require("../middlewares/authenticationValidate.js")

adminRouter.post("/login",adminController.loginAuthentication);
adminRouter.post("/add-vehicle",validate,adminController.addVehicle)
adminRouter.put("/edit-vehicle",validate,adminController.editVehicle)
adminRouter.delete("/remove-vehicle",validate,adminController.removeVehicle)
adminRouter.get('/vehicles',validate,adminController.getAllVehicles)





module.exports = adminRouter;