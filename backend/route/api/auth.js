const express = require("express");
const registrationController = require("../../controllers/RegistrationController");
const secureAPI = require("../../middleware/secureAPI");
const route = express.Router();

route.post("/registration", secureAPI, registrationController);

module.exports = route;
