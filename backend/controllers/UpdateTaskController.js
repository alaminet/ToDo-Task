const Task = require("../models/taskModel");

async function UpdateTaskController(req, res) {
  const { id } = req.body;
  const existingtask = await Task.findById(id);

  if (existingtask.status === "done") {
    return res.status(401).json({ message: "Already Done !" });
  } else {
    const updateTask = await Task.findByIdAndUpdate(
      existingtask._id,
      { $set: { status: "done" } },
      { new: true }
    );
    await updateTask.save();
    res.status(200).json({ updateTask, message: "Task Done !" });
  }
}

module.exports = UpdateTaskController;
