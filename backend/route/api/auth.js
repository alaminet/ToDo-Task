const express = require("express");
const registrationController = require("../../controllers/RegistrationController");
const secureAPI = require("../../middleware/secureAPI");
const MatchOTPController = require("../../controllers/MatchOTPController");
const LoginController = require("../../controllers/LoginController");
const ProfileImgController = require("../../controllers/ProfileImgController");
const route = express.Router();

route.post("/registration", secureAPI, registrationController);
route.post("/otpverify", secureAPI, MatchOTPController);
route.post("/login", secureAPI, LoginController);
route.put("/profilePic", secureAPI, ProfileImgController);

module.exports = route;
