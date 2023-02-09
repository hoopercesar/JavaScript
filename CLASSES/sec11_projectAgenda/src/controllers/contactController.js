const Contact = require("../models/ContactModel");

exports.index = (req, res) => {
  res.render("contact", { contact: {} });
};

exports.register = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.register();

    if (contact.errors.length > 0) {
      req.flash("errors", contact.errors);
      req.session.save(() => {
        return res.redirect("/contact/index");
      });

      return;
    }

    req.flash("success", "Contact registered succefully");
    req.session.save(() =>
      res.redirect(`/contact/index/${contact.contact._id}`)
    );
  } catch (err) {
    console.log(err);
    return res.render("404");
  }
};

exports.editIndex = async function (req, res) {
  if (!req.params.id) res.render("404");

  const contact = await Contact.findById(req.params.id);
  res.render("contact", { contact });
};

exports.edit = async function (req, res) {
  try {
    if (!req.params.id) res.render("404");

    const contact = new Contact(req.body);
    await contact.edit(req.params.id);

    if (contact.errors.length > 0) {
      req.flash("errors", contact.errors);
      req.session.save(() => {
        return res.redirect("/contact/index");
      });

      return;
    }

    req.flash("success", "Contact edited succefully");
    req.session.save(() =>
      res.redirect(`/contact/index/${contact.contact._id}`)
    );
  } catch (err) {
    console.log(err);
    res.render("404");
  }
};

exports.delete = async function (req, res) {
  if (!req.params.id) res.render("404");

  const contact = await Contact.delete(req.params.id);
  if (!contact) res.render("404");

  req.flash("success", "contact deleted succefully");
  req.session.save(() => res.redirect("/"));
  return;
};
