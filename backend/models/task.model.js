const mongoose=require("mongoose")

const taskSchema = mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    type:{
      type: String,
      required: true,
      default: "Task"
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);
const Task=mongoose.model("Task",taskSchema);
module.exports = Task;
