export const priorityQueries = {
  getPriorities: `SELECT id AS priorityId, level, level_name FROM planner.priority`,
  getPrioritiesById: `SELECT id AS priorityId, title FROM planner.priority WHERE planner.priority.id = ?`,
  getprioritiesByLevel: `SELECT id AS priorityId, title, level, level_name FROM planner.priority WHERE planner.priority.level = ?`,
  getprioritiesByLevelName: `SELECT id AS priorityId, title, level, level_name FROM planner.priority WHERE planner.priority.level_name = ?`,
};
