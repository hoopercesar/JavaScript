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

Contact.prototype.edit = async function (id) {
  if (typeof id !== "string") return;
  this.valida();
  if (this.errors.length > 0) return;
  this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {
    new: true,
  });
};

// static methods
Contact.findById = async function (id) {
  if (typeof id !== "string") return;
  const contact = await ContactModel.findById(id);
  return contact;
};

// sort function with -1 paramter returns an ordered decrecent list
Contact.findContacts = async function () {
  const contacts = await ContactModel.find().sort({ createdIn: -1 });
  return contacts;
};

Contact.delete = async function (id) {
  if (typeof id !== "string") return;
  const contact = await ContactModel.findOneAndDelete({ _id: id });
  return contact;
};

module.exports = Contact;
