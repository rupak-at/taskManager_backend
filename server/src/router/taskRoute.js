import { Router } from "express";
import { createTask, getAllTask } from "../controller/taskController.js";
import { validateTaskCreationData } from "../middleware/dataValidation.js";

const app = Router();

app.post("/task",validateTaskCreationData, createTask);
app.get("/task", getAllTask);

export default app