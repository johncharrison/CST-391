import { Task } from "../tasks/tasks.model";
import { Tag } from "../tags/tags.model";
import { TaskTag } from "./task-tags.model";
import * as TaskTagDao from "./task-tags.dao";
import * as TagDao from "../tags/tags.dao";

export async function getTagsForTask(task: Task) {
  const taskTags: TaskTag[] = await TaskTagDao.getTaskTagsByTaskID(task.taskId);
  let tags: Tag[] = [];
  for (let i = 0; i < taskTags.length; i++) {
    const tag = await TagDao.getTagsById(taskTags[i].tagId);
    tags.push(tag[0]);
  }
  task.tags = tags;
}
