import { Priority } from "./priorities.model";
import { execute } from "../services/mysql.connector";
import { priorityQueries } from "./priorities.queries";

export const getPriorities = async () => {
  return execute<Priority[]>(priorityQueries.getPriorities, []);
};

export const getPrioritiesById = async (priorityId: number) => {
  return execute<Priority[]>(priorityQueries.getPrioritiesById, [priorityId]);
};
