const express = require('express');
const userController =require("../Controller/userController");
const route = express.Router();

const controller = new userController();

route.get("/getusers",controller.getUsers);
route.get("/getdata",controller.axiosGetData);
route.post("/createuser",controller.createUser);
route.post("/createuserdata",controller.axioscreateUser);

module.exports = route;