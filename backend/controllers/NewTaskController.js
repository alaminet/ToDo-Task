const Task = require("../models/taskModel");

async function NewTaskController(req, res) {
  const { title, discription } = req.body;
  if (!title || !discription) {
    return res.status(401).send({ message: "Input all filed" });
  } else {
    const task = await new Task({
      title: title,
      discription: discription,
    });

    await task.save();
    return res.status(200).send({ task, message: "Taske Added !" });
  }
}

module.exports = NewTaskController;
