const bcrypt = require("bcrypt");
const User = require("../models/userModel");

async function LoginController(req, res) {
  const { email, password } = req.body;
  const existingUser = await User.find({ email });

  if (existingUser.length > 0) {
    if (existingUser[0].verify) {
      bcrypt.compare(
        password,
        existingUser[0].password,
        function (err, result) {
          if (result) {
            return res.json({
              user: existingUser[0],
              message: "Login Successfull",
            });
          } else {
            return res.status(401).send({
              message: "Password not matched",
            });
          }
        }
      );
    } else {
      return res.status(401).send({
        message: "Please Verify your OTP",
      });
    }
  } else {
    return res.status(401).send({
      message: "Email not matched",
    });
  }
}

module.exports = LoginController;
