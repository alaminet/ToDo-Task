const express = require("express");
const secureAPI = require("../../middleware/secureAPI");
const NewTaskController = require("../../controllers/NewTaskController");
const ViewTaskController = require("../../controllers/ViewTaskController");
const UpdateTaskController = require("../../controllers/UpdateTaskController");
const TaskDeleteController = require("../../controllers/TaskDeleteController");
const route = express.Router();

route.post("/newtask", secureAPI, NewTaskController);
route.get("/viewtask", secureAPI, ViewTaskController);
route.put("/updatetask", secureAPI, UpdateTaskController);
route.put("/taskDlt", secureAPI, TaskDeleteController);

module.exports = route;
