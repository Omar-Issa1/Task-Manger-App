import express from "express";
import {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";
import validateTask from "../middleware/validateTask.js";
const router = express.Router();

router.route("/").get(getAllTasks).post(validateTask, createTask);
router
  .route("/:id")
  .get(getTask)
  .patch(validateTask, updateTask)
  .delete(deleteTask);

export default router;
