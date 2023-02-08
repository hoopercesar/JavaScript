const mongoose = require("mongoose");
const validator = require("validator");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: false, default: "" },
  email: { type: String, required: false, default: "" },
  telephone: { type: String, required: false, default: "" },
  createdIn: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model("Contact", ContactSchema);

function Contact(body) {
  this.body = body;
  this.errors = [];
  this.contact = null;
}

Contact.findById = async function (id) {
  if (typeof id !== "string") return;
  const user = await ContactModel.findById(id);
  return user;
};

Contact.prototype.register = async function () {
  this.valida();

  if (this.errors.length > 0) return;

  this.contact = await ContactModel.create(this.body);
};

Contact.prototype.valida = function () {
  // contact information validation
  this.cleanUp();
  // info validation
  if (this.body.email && !validator.isEmail(this.body.email))
    this.errors.push("Invalid email");
  if (!this.body.name) this.errors.push("You must include a contact name");
  if (!this.body.email && !this.body.telephone) {
    this.errors.push("You must include at least email or telephone contact");
  }
};

Contact.prototype.cleanUp = function () {
  for (let key in this.body) {
    if (typeof this.body[key] !== "string") {
      this.body[key] == "";
    }
  }
  this.body = {
    name: this.body.name,
    lastname: this.body.lastname,
    email: this.body.email,
    telephone: this.body.telephone,
  };
};

module.exports = Contact;
