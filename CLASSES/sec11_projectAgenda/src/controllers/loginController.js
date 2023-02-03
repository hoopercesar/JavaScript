const Login = require("../models/LoginModel");

exports.index = (req, res) => {
  res.render("login");
};

exports.register = (req, res) => {
  const login = new Login(req.body);
  login.register();
  // it posts in page the user information sended
  res.send(login.errors);
};
