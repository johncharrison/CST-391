import { ResultSetHeader } from "mysql2";
import { execute } from "../services/mysql.connector";
import { Project } from "./projects.model";
import { projectQueries } from "./projects.queries";

export const getProjects = async () => {
  return execute<Project[]>(projectQueries.getProjects, []);
};

export const getProjectsById = async (projectId: number) => {
  return execute<Project[]>(projectQueries.getProjectsById, [projectId]);
};

export const getProjectsByTitleSearch = async (search: string) => {
  return execute<Project[]>(projectQueries.getProjectsByTitleSearch, [search]);
};

export const getProjectsByStatus = async (status_id: number) => {
  return execute<Project[]>(projectQueries.getProjectsByStatus, [status_id]);
};

export const createProject = async (project: Project) => {
  return execute<ResultSetHeader>(projectQueries.createProject, [
    project.title,
    project.description,
    project.url_location,
    project.start_date,
    project.due_date,
    project.status_id,
  ]);
};

export const updateProject = async (project: Project) => {
  return execute<ResultSetHeader>(projectQueries.updateProject, [
    project.title,
    project.description,
    project.url_location,
    project.start_date,
    project.due_date,
    project.status_id,
    project.projectId,
  ]);
};

export const deleteProject = async (projectId: number) => {
  return execute<ResultSetHeader>(projectQueries.deleteProject, [projectId]);
};
