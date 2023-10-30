import { Request, Response, RequestHandler } from "express";
import { Project } from "./projects.model";
import * as ProjectDao from "./projects.dao";
import { getTasksForProject, getProjectStatuses } from "./project.utils";

export const getProjects: RequestHandler = async (req: Request, res: Response) => {
  try {
    let projects = await ProjectDao.getProjects();

    await getTasksForProject(projects);
    await getProjectStatuses(projects);

    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There was an error when fetching projects" });
  }
};

export const getProjectsByID: RequestHandler = async (req: Request, res: Response) => {
  try {
    let projects: Project[];
    let projectId = parseInt(req.params.projectId as string);

    if (Number.isNaN(projectId)) {
      throw Error("projectId must be a positive integer");
    } else {
      projects = await ProjectDao.getProjectsById(projectId);
    }

    await getTasksForProject(projects);
    await getProjectStatuses(projects);

    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There was an error when fetching projects" });
  }
};

// export const getProjectsByTitleSearch: RequestHandler = async (req: Request, res: Response) => {
//   try {
//     const q = req.params.search as string;
//     const projects: Project[] = await ProjectDao.getProjectsByTitleSearch(`%${q}%`);
//     await getTasksForProject(projects);
//     res.status(200).json(projects);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "There was an error when fetching projects" });
//   }
// };

// export const getProjectsByStatus: RequestHandler = async (req: Request, res: Response) => {
//   try {
//     const status_title = req.params.status as string;
//     const status: Status = await getStatusIdByTitle(status_title);

//     const projects: Project[] = await ProjectDao.getProjectsByStatus(status.statusId);
//     await getTasksForProject(projects);
//     res.status(200).json(projects);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "There was an error when fetching projects" });
//   }
// };

export const createProject: RequestHandler = async (req: Request, res: Response) => {
  try {
    const project = req.body;
    const ok = await ProjectDao.createProject(project);
    res.status(201).json(ok);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while creating project" });
  }
};

export const updateProject: RequestHandler = async (req: Request, res: Response) => {
  try {
    const project: Project = req.body;
    const ok = await ProjectDao.updateProject(project);
    res.status(200).json(ok);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while updating project" });
  }
};

export const deleteProject: RequestHandler = async (req: Request, res: Response) => {
  try {
    const projectId = parseInt(req.params.projectId as string);
    const ok = await ProjectDao.deleteProject(projectId);
    res.status(204).json(ok);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error while deleting project" });
  }
};
