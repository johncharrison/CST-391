import { Request, Response, RequestHandler } from "express";
import { Project } from "./projects.model";
import * as ProjectDao from "./projects.dao";
import { Status } from "../statuses/statuses.model";
import { getStatusesByTitle } from "../statuses/statuses.dao";
import { ResultSetHeader } from "mysql2";

export const getProjects: RequestHandler = async (req: Request, res: Response) => {
  try {
    let projects: Project[] | Project;
    let projectId = parseInt(req.query.projectId as string);

    if (Number.isNaN(projectId)) {
      projects = await ProjectDao.getProjects();
    } else {
      projects = await ProjectDao.getProjectsById(projectId);
    }

    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There was an error when fetching projects" });
  }
};

export const getProjectsByTitleSearch: RequestHandler = async (req: Request, res: Response) => {
  try {
    const q = req.params.search as string;
    const projects: Project[] = await ProjectDao.getProjectsByTitleSearch(`%${q}%`);

    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There was an error when fetching projects" });
  }
};

export const getProjectsByStatus: RequestHandler = async (req: Request, res: Response) => {
  try {
    const status_title = req.params.status as string;
    const status: Status = await getStatusIdByTitle(status_title);

    const projects: Project[] = await ProjectDao.getProjectsByStatus(status.statusId);

    res.status(200).json(projects);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There was an error when fetching projects" });
  }
};

async function getStatusIdByTitle(status_title: string) {
  const status: Status[] = await getStatusesByTitle(status_title);
  return new Promise<Status>((resolve, reject) => {
    if (status[0]) {
      resolve(status[0]);
    } else {
      reject("Error looking up status");
    }
  });
}
