export const taskTagQueries = {
  getTaskTags: `SELECT task_id AS taskId, tag_id as tagId FROM planner.task_tag`,
  getTaskTagsByTaskId: `SELECT task_id AS taskId, tag_id as tagId FROM planner.task_tag WHERE planner.task_tag.task_id = ?`,
  getTaskTagsByTagId: `SELECT task_id AS taskId, tag_id as tagId FROM planner.task_tag WHERE planner.task_tag.tag_id = ?`,
  createTaskTag: `INSERT INTO planner.task_tag(task_id, tag_id) VALUES(?,?),`,
  updateTaskTag: `UPDATE planner.task_tag SET task_id = ?, tag_id = ? WHERE planner.task_tag.task_id = ?`,
  deleteTaskTag: `DELETE FROM planner.task_tag WHERE planner.task_tag.task_id = ?`,
};
