const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");

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

  // for registering in a database we need to work with promises
  // cause DB brings back promises
  async register() {
    this.valida();

    if (this.errors.length > 0) return;

    // verify if user exists in DB. this function returns one error
    // if the user exists in DB
    await this.userExists();

    // if there exists at least one error we stop the process
    if (this.errors.length > 0) return;

    try {
      // hashing the password
      const hash = crypto.createHash("sha512");
      this.body.password = hash.update(this.body.password).digest("hex");
      //  this function is a promise and we have to wait.
      //  and then we fill variable user with this info
      this.user = await LoginModel.create(this.body);
    } catch (err) {
      console.log(err);
    }
  }

  async userExists() {
    // findOne function returns username if the user exists
    // or null if the user does not exist
    const user = await LoginModel.findOne({ email: this.body.email });
    if (user)
      this.errors.push("This username already exists. Try another username");
  }

  valida() {
    // user information validation
    this.cleanUp();
    // email validation
    if (!validator.isEmail(this.body.email)) this.errors.push("Invalid email");

    // password validation between 3 and 5 chars
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push(
        "Password length error: Password must have between 3 and 50 chars"
      );
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
