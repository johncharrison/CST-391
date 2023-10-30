import { Status } from "../statuses/statuses.model";
import { Priority } from "../priorities/priorities.model";
import { Tag } from "../tags/tags.model";

export interface Task {
  taskId: number;
  title: string;
  status: Status;
  due_date: Date;
  created_date: Date;
  modified_date: Date;
  priority: Priority;
  tags: Array<Tag>;
}
