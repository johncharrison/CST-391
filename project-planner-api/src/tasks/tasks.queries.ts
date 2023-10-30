export const taskQueries = {
  getTasks: `SELECT id AS taskId, title, description, status_id AS status, due_date, created_date, modified_date, priority_id AS priority, project_id AS project FROM planner.task`,
  getTasksById: `SELECT id AS taskId, title, description, status_id AS status, due_date, created_date, modified_date, priority_id AS priority, project_id AS project FROM planner.task WHERE planner.task.id = ?`,
  getTasksByProjectId: `SELECT id AS taskId, description, title, status_id AS status, due_date, created_date, modified_date, priority_id AS priority, project_id AS project FROM planner.task WHERE planner.task.project_id = ?`,
  createTask: `INSERT INTO planner.task(title, description, status_id, due_date, priority_id, project_id) VALUES(?,?,?,?,?,?)`,
  updateTask: `UPDATE planner.task SET title = ?, description = ?, status_id = ?, due_date = ?, priority_id = ? WHERE planner.task.id = ?`,
  deleteTask: `DELETE FROM planner.task WHERE planner.task.id = ?`,
};
