const Task = require("../models/taskModel");

async function TaskDeleteController(req, res) {
  const { id } = req.body;
  const existingtask = await Task.findById(id);
  console.log(existingtask);
  if (existingtask) {
    const taskdlt = await Task.findByIdAndDelete(existingtask._id);
    return res.status(200).json({ message: "Task Deleted !" });
  } else {
    return res.status(401).json({ message: "Try Again !" });
  }
}

module.exports = TaskDeleteController;
