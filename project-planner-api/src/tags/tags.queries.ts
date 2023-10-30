export const tagQueries = {
  getTags: `SELECT id as tagId, title, color FROM planner.tag`,
  getTagsById: `SELECT id as tagId, title, color FROM planner.tag WHERE planner.tag.id = ?`,
  getTagsByTitle: `SELECT id as tagId, title, color FROM planner.tag WHERE planner.tag.title = ?`,
  getTagsByColor: `SELECT id as tagId, title, color FROM planner.tag WHERE planner.tag.color = ?`,
  createTag: `INSERT INTO planner.tag(title, color) VALUES (?, ?)`,
  updateTag: `UPDATE planner.tag SET title = ?, color = ? WHERE planner.tag.id = ?`,
  deleteTag: `DELETE FROM planner.tag WHERE planner.tag.id = ?`,
};
