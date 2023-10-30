import { Router } from "express";
import * as ProjectController from "./project.controller";

const router = Router({ caseSensitive: true, strict: true });

router.route("/").get(ProjectController.getProjects);
router.route("/:projectId").get(ProjectController.getProjectsByID);
router.post("/", ProjectController.createProject);
router.put("/", ProjectController.updateProject);
router.delete("/:projectId", ProjectController.deleteProject);

export default router;
