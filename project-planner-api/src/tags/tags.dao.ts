import { Tag } from "./tags.model";
import { tagQueries } from "./tags.queries";
import { execute } from "../services/mysql.connector";

export const getTags = async () => {
  return execute<Tag[]>(tagQueries.getTags, []);
};

export const getTagsById = async (tagId: number) => {
  return execute<Tag[]>(tagQueries.getTagsById, [tagId]);
};
