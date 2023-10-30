import { Task } from "../tasks/tasks.model";
import { Status } from "../statuses/statuses.model";

export interface Project {
  projectId: number;
  title: string;
  description: string;
  url_location: string;
  tasks: Array<Task>;
  start_date: Date;
  due_date: Date;
  status: Status | number;
  created_date: Date;
  modified_date: Date;
}
