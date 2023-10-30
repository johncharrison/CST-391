import { Request, Response, NextFunction } from "express";
import { v4 as uuid4 } from "uuid";

const getProcessingTimeInMS = (time: [number, number]): string => {
  return `${(time[0] * 1000 + time[1] / 1e6).toFixed(2)}ms`;
};

export default function logger(req: Request, res: Response, next: NextFunction) {
  const id = uuid4();

  const now = new Date();
  const timestamp = now.toISOString();
  console.log(timestamp);

  const { method, url } = req;

  const start = process.hrtime();
  const startText = `START:${getProcessingTimeInMS(start)}`;
  const idText = `[${id}]`;

  console.log(`${idText}${timestamp} ${method}:${url} ${startText}`);

  res.once("finish", () => {
    const end = process.hrtime();
    const endText = `${getProcessingTimeInMS(end)}`;
    console.log(`${idText}${timestamp} ${method}:${url} ${endText}`);
  });
  next();
}
