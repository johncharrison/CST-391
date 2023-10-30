import { Router } from "express";
import * as TaskController from "./tasks.controller";

const router = Router({ caseSensitive: true, strict: true });

router.route("/:taskId").get(TaskController.getTasksById);
export default router;
