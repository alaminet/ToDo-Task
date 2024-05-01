const Task = require("../models/taskModel");

async function ViewTaskController(req, res) {
  const TaskList = await Task.find();
  return res.send(TaskList);
}

module.exports = ViewTaskController;
