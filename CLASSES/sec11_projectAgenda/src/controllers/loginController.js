const Login = require("../models/LoginModel");

exports.login = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.login();

    // checking errors and creating errors messagens
    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        return res.redirect("/login/index");
      });
      return;
    }

    req.flash("Success", "You were logged succefully");
    req.session.user = login.user;
    req.session.save(function () {
      return res.redirect("/login/index");
    });
  } catch (err) {
    console.log(err);
    return res.render("404");
  }
};

exports.index = (req, res) => {
  if (req.session.user) return res.render("login-logado");
  return res.render("login");
};

exports.register = async function (req, res) {
  try {
    const login = new Login(req.body);
    await login.register();

    // checking errors and create errors messagens
    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        return res.redirect("/login/index");
      });
      return;
    }

    // it posts in page the user information sended
    // return res.send(login.errors);

    req.flash("Success", "User was created succefully");
    req.session.save(function () {
      return res.redirect("/login/index");
    });
  } catch (err) {
    console.log(err);
    return res.render("404");
  }
};

exports.logout = function (req, res) {
  req.session.destroy();
  res.redirect("/");
};
