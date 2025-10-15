import Task from "../models/Task.js";
import mongoose from "mongoose";
import asyncWrapper from "../middleware/async.js";
import { createCustomError } from "../errors/custom-errors.js";
export const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  return res
    .status(200)
    .json({ status: "success", count: tasks.length, data: tasks });
});

export const createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);
  return res.status(201).json({ status: "success", data: task });
});
export const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return next(createCustomError("Invalid task ID", 400));
  }

  const task = await Task.findById(taskID);
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  return res.status(200).json({ status: "success", data: task });
});
export const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return next(createCustomError("Invalid task ID", 400));
  }
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  return res.status(200).json({
    status: "success",
    data: null,
    message: "Task deleted successfully",
  });
});
export const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  if (!mongoose.Types.ObjectId.isValid(taskID)) {
    return next(createCustomError("Invalid task ID", 400));
  }
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  return res.status(200).json({ status: "success", data: task });
});
