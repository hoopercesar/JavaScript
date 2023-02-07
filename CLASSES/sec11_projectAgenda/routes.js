const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const loginController = require("./src/controllers/loginController");
const contactController = require("./src/controllers/contactController");

const { loginRequired } = require("./src/middlewares/middleware");

// ruta del home
route.get("/", homeController.index);

// login's routes
route.get("/login/index", loginController.index);
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

// routes for creating contacts. middeware in the middle of the route
// for users not conected. they must be logged in
route.get("/contact/index", loginRequired, contactController.index);

module.exports = route;
