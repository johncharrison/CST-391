export const projectQueries = {
  getProjects: `SELECT id AS projectId, title, description, url_location, start_date, due_date, status_id, created_date, modified_date FROM planner.project`,
  getProjectsById: `SELECT id AS projectId, title, description, url_location, start_date, due_date, status_id, created_date, modified_date FROM planner.project WHERE planner.project.id = ?`,
  getProjectsByTitleSearch: `SELECT id AS projectId, title, description, url_location, start_date, due_date, status_id, created_date, modified_date FROM planner.project WHERE planner.project.title LIKE ?`,
  getProjectsByStatus: `SELECT id AS projectId, title, description, url_location, start_date, due_date, status_id, created_date, modified_date FROM planner.project WHERE planner.project.status_id = ?`,
  createProject: `INSERT INTO project(title, description, url_location, start_date, due_date, status_id) VALUES(?,?,?,?,?,?)`,
  updateProject: `UPDATE planner.project SET title = ?, description = ?, url_location = ?, start_date = ?, due_date = ? , status_id = ? WHERE planner.project.id = ?`,
  deleteProject: `DELETE FROM planner.project WHERE planner.project.id = ?`,
};
