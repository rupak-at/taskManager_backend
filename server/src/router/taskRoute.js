import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTask,
  getTaskById,
  upadateExistingTask,
  updateTaskStatus,
} from "../controller/taskController.js";
import {
  updatingTaskDataValidation,
  updatingTaskStatusValidation,
  validateTaskCreationData,
} from "../middleware/dataValidation.js";

const app = Router();

app.post("/task", validateTaskCreationData, createTask);
app.get("/task", getAllTask);
app.get("/task/:id", getTaskById);
app.put("/task/:id", updatingTaskDataValidation, upadateExistingTask);
app.delete("/task/:id", deleteTask);
app.patch("/task/:id/status", updatingTaskStatusValidation, updateTaskStatus);
export default app;
