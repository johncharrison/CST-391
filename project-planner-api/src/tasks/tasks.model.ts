import { Status } from "../statuses/statuses.model";
import { Priority } from "../priorities/priorities.model";
import { Tag } from "../tags/tags.model";
import { Project } from "../projects/projects.model";

export interface Task {
  taskId: number;
  title: string;
  description: string;
  status: Status | number;
  due_date: Date;
  created_date: Date;
  modified_date: Date;
  priority: Priority | number;
  tags: Array<Tag>;
  project: Project | number;
}
