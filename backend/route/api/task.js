const express = require("express");
const secureAPI = require("../../middleware/secureAPI");
const NewTaskController = require("../../controllers/NewTaskController");
const ViewTaskController = require("../../controllers/ViewTaskController");
const UpdateTaskController = require("../../controllers/UpdateTaskController");
const route = express.Router();

route.post("/newtask", secureAPI, NewTaskController);
route.get("/viewtask", secureAPI, ViewTaskController);
route.put("/updatetask", secureAPI, UpdateTaskController);

module.exports = route;
