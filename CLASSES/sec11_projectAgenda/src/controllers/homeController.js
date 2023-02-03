const HomeModel = require("../models/HomeModel");

// HomeModel.find()
//   .then((datos) => {
//     datos.forEach((dato) => console.log(dato.titulo));
//   })
//   .catch((err) => console.log(err));

exports.index = (req, res) => {
  res.render("index");
  return;
};
