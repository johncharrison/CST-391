import { execute } from "../services/mysql.connector";
import { Status } from "./statuses.model";
import { statusQueries } from "./statuses.queries";

export const getStatuses = async () => {
  return execute<Status[]>(statusQueries.getStatuses, []);
};

export const getStatusesById = async (statusId: number) => {
  return execute<Status[]>(statusQueries.getStatusesById, [statusId]);
};

export const getStatusesByTitle = async (title: string) => {
  return execute<Status[]>(statusQueries.getStatusesByTitle, [title]);
};

export const getStatusesByTitleSearch = async (search: string) => {
  return execute<Status[]>(statusQueries.getStatusesByTitleSearch, [search]);
};
