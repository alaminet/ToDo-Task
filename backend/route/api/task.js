const express = require("express");
const secureAPI = require("../../middleware/secureAPI");
const NewTaskController = require("../../controllers/NewTaskController");
const route = express.Router();

route.post("/newtask", secureAPI, NewTaskController);

module.exports = route;
