const HomeModel = require("../models/HomeModel");
const Contact = require("../models/ContactModel");

// HomeModel.find()
//   .then((datos) => {
//     datos.forEach((dato) => console.log(dato.titulo));
//   })
//   .catch((err) => console.log(err));

exports.index = async (req, res) => {
  const contacts = await Contact.findContacts();
  res.render("index", { contacts });
  return;
};
