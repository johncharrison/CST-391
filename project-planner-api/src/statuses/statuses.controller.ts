import { Request, Response, RequestHandler } from "express";
import { Status } from "./statuses.model";
import * as StatusDao from "./statuses.dao";
import { ResultSetHeader } from "mysql2";

export const getStatuses: RequestHandler = async (req: Request, res: Response) => {
  try {
    let statuses: Status[] | Status;
    statuses = await StatusDao.getStatuses();
    res.status(200).json(statuses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There was an error when fetching statuses" });
  }
};

export const getStatusesById: RequestHandler = async (req: Request, res: Response) => {
  try {
    let statuses: Status[] | Status;
    let statusId = parseInt(req.params.statusId as string);

    if (Number.isNaN(statusId)) {
      throw Error("statusId must be a positive integer");
    } else {
      statuses = await StatusDao.getStatusesById(statusId);
    }

    res.status(200).json(statuses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There was an error when fetching statuses" });
  }
};

export const getStatusesByTitle: RequestHandler = async (req: Request, res: Response) => {
  try {
    const status: Status[] = await StatusDao.getStatusesByTitle(req.params.title as string);

    res.status(200).json(status);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There was an error when fetching projects" });
  }
};

export const getStatusesByTitleSearch: RequestHandler = async (req: Request, res: Response) => {
  try {
    const q = req.params.search as string;
    const status: Status[] = await StatusDao.getStatusesByTitleSearch(`%${q}%`);

    res.status(200).json(status);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "There was an error when fetching projects" });
  }
};
