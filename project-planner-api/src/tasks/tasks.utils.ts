import { Task } from "./tasks.model";
import * as TaskTagsHandler from "../task-tags/task-tags";
import { getStatusesById } from "../statuses/statuses.dao";
import { getPrioritiesById } from "../priorities/priorities.dao";
import { getProjectsById } from "../projects/projects.dao";

export async function getTags(tasks: Task[]) {
  for (let i = 0; i < tasks.length; i++) {
    await TaskTagsHandler.getTagsForTask(tasks[i]);
  }
}

export async function getStatuses(tasks: Task[]) {
  for (let i = 0; i < tasks.length; i++) {
    const s = await getStatusesById(tasks[i].status as number);
    tasks[i].status = s[0];
  }
}

export async function getProjects(tasks: Task[]) {
  for (let i = 0; i < tasks.length; i++) {
    const s = await getProjectsById(tasks[i].project as number);
    tasks[i].project = s[0];
  }
}

export async function getPriorities(tasks: Task[]) {
  for (let i = 0; i < tasks.length; i++) {
    const s = await getPrioritiesById(tasks[i].priority as number);
    tasks[i].priority = s[0];
  }
}
