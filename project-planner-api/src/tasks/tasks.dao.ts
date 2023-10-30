import { Task } from "./tasks.model";
import { execute } from "../services/mysql.connector";
import { taskQueries } from "./tasks.queries";
import { ResultSetHeader } from "mysql2";

export const getTasks = async () => {
  return execute<Task[]>(taskQueries.getTasks, []);
};

export const getTasksById = async (taskId: number) => {
  return execute<Task[]>(taskQueries.getTasksById, [taskId]);
};

export const getTasksByProjectId = async (projectId: number) => {
  return execute<Task[]>(taskQueries.getTasksByProjectId, [projectId]);
};

export const createTask = async (task: Task) => {
  return execute<ResultSetHeader>(taskQueries.createTask, [
    task.title,
    task.description,
    task.status,
    task.due_date,
    task.priority,
    task.project,
  ]);
};

export const updateTask = async (task: Task) => {
  return execute<ResultSetHeader>(taskQueries.updateTask, [
    task.title,
    task.description,
    task.status,
    task.due_date,
    task.priority,
    task.project,
    task.taskId,
  ]);
};
