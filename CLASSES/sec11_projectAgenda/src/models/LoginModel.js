const mongoose = require("mongoose");
const validator = require("validator");

// lo que sea posted en loginController será leído y analizado acá

// mongooseLogin configuration
const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

// get information from register
class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  register() {
    this.valida();
    if (this.errors.length > 0) return;
  }

  valida() {
    // user information validation
    this.cleanUp();
    // email validation
    if (!validator.isEmail(this.body.email)) this.errors.push("Invalid email");

    // password validation between 3 and 5 chars
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push("Password length error");
    }
  }

  cleanUp() {
    for (let key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] == "";
      }
    }
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;
