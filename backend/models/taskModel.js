const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  discription: String,
  status: {
    type: String,
    enum: ["pending", "done"],
    default: "pending",
  },
});

module.exports = mongoose.model("Task", taskSchema);
