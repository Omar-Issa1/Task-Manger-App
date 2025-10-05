import Task from "../models/Task.js";
import mongoose from "mongoose";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res
      .status(200)
      .json({ status: "success", count: tasks.length, data: tasks });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ status: "success", data: task });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    if (!mongoose.Types.ObjectId.isValid(taskID)) {
      return res.status(400).json({ msg: "Invalid task ID" });
    }

    const task = await Task.findById(taskID);
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }

    return res.status(200).json({ status: "success", data: task });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(taskID)) {
      return res.status(400).json({ msg: "Invalid task ID" });
    }
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    // return res.status(200).json({ task });
    //  return res.status(200).send()
    return res
      .status(200)
      .json({ msg: "Task deleted successfully", status: "success" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    if (!mongoose.Types.ObjectId.isValid(taskID)) {
      return res.status(400).json({ msg: "Invalid task ID" });
    }
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${taskID}` });
    }
    return res.status(200).json({ status: "success", data: task });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
