export const statusQueries = {
  getStatuses: `SELECT id AS statusId, title FROM planner.status`,
  getStatusesById: `SELECT id AS statusId, title FROM planner.status WHERE planner.status.id = ?`,
  getStatusesByTitle: `SELECT id AS statusId, title FROM planner.status WHERE planner.status.title = ?`,
  getStatusesByTitleSearch: `SELECT id AS statusId, title FROM planner.status WHERE planner.status.title LIKE ?`,
};
