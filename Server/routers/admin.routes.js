const express = require("express");
const adminRouter = express.Router();
const adminController = require("../controllers/admin.js");

adminRouter.post("/login",adminController.loginAuthentication);





module.exports = adminRouter;