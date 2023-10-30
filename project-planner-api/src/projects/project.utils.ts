import { getTags, getStatuses, getPriorities } from "../tasks/tasks.utils";
import { getStatusesById } from "../statuses/statuses.dao";
import { Project } from "./projects.model";
import * as TaskDao from "../tasks/tasks.dao";

export async function getTasksForProject(projects: Project[]) {
  for (let i = 0; i < projects.length; i++) {
    const tasks = await TaskDao.getTasksByProjectId(projects[i].projectId as number);
    await getTags(tasks);
    await getStatuses(tasks);
    await getPriorities(tasks);
    projects[i].tasks = tasks;
  }
}

export async function getProjectStatuses(projects: Project[]) {
  for (let i = 0; i < projects.length; i++) {
    const s = await getStatusesById(projects[i].status as number);
    projects[i].status = s[0];
  }
}
