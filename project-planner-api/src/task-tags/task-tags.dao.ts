import { execute } from "../services/mysql.connector";
import { taskTagQueries } from "./task-tags.queries";
import { ResultSetHeader } from "mysql2";
import { TaskTag } from "./task-tags.model";

export const getTaskTags = async () => {
  return execute<TaskTag[]>(taskTagQueries.getTaskTags, []);
};

export const getTaskTagsByTaskID = async (taskId: number) => {
  return execute<TaskTag[]>(taskTagQueries.getTaskTagsByTaskId, [taskId]);
};

export const getTaskTagsByTagID = async (tagId: number) => {
  return execute<TaskTag[]>(taskTagQueries.getTaskTagsByTagId, [tagId]);
};
