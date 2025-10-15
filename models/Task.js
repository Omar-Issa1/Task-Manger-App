import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task name is required"],
    trim: true,
    maxlength: [150, "Task name cannot be more than 150 characters"],
  },
  completed: { type: Boolean, default: false },
});

export default mongoose.model("Task", TaskSchema);
