const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");

// ruta del home
route.get("/", homeController.index);

// login's routes
route.get("/login/index", loginController.index);
route.post("/login/register", loginController.register);

module.exports = route;
