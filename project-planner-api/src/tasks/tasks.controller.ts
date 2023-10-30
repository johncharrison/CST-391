import { RequestHandler, Request, Response } from "express";
import * as TaskDao from "./tasks.dao";
import { getTags, getStatuses, getPriorities, getProjects } from "./tasks.utils";

export const getTasksById: RequestHandler = async (req: Request, res: Response) => {
  try {
    const taskId = parseInt(req.params.taskId as string);
    let tasks = [];
    if (Number.isNaN(taskId)) {
      throw Error("taskId must be a positive integer");
    } else {
      tasks = await TaskDao.getTasksById(taskId);
    }
    await getTags(tasks);
    await getStatuses(tasks);
    await getPriorities(tasks);
    await getProjects(tasks);

    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "There was an error while fetching tasks" });
  }
};
