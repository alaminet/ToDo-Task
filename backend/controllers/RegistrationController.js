require("dotenv").config();
const User = require("../models/userModel");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const OTPEmail = require("../helpers/OTPEmail");
const OTPTemplate = require("../helpers/OTPTemplate");

const registrationController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send({ error: "Please fill the all filed" });
  }

  if (password && password.length < 6) {
    return res.status(400).send({ error: "Password to small" });
  }

  const existingUser = await User?.find({ email: email });
  if (existingUser.length > 0) {
    return res.status(401).send({ error: `${email} already used` });
  } else {
    bcrypt.hash(password, 10, async function (err, hash) {
      const token = jwt.sign({ email: email }, process.env.tokenCode);
      const otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });
      const user = await new User({
        username: username,
        email: email,
        password: hash,
        otp: otp,
        token: token,
        avater: null,
      });

      await user.save();

      //   OTP send to email
      OTPEmail(email, user.otp, token, OTPTemplate);

      res.status(200).send(user);
    });
  }

  //   if (existingUser.length > 0) {
  //     return res.status(401).send({ error: `${email} already used` });
  //   } else {
  //     bcrypt.hash(password, 10, async function (err, hash) {
  //       var token = jwt.sign({ foo: "bar" }, process.env.tokenCode);
  //       const otp = otpGenerator.generate(6, {
  //         upperCaseAlphabets: false,
  //         specialChars: false,
  //         lowerCaseAlphabets: false,
  //       });
  //       const user = await new User({
  //         username: username,
  //         email: email,
  //         password: hash,
  //         otp: otp,
  //       });
  //       await user.save();

  //       // OTP send to email
  //       OTPEmail(email, user.otp, OTPTemplate);

  //       res.send({
  //         name: user.name,
  //         email: user.email,
  //         otp: user.otp,
  //       });
  //     });
  //   }
};

module.exports = registrationController;
