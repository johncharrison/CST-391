import { Router } from "express";
import * as StatusController from "./statuses.controller";

const router = Router({ caseSensitive: true, strict: true });

router.route("/").get(StatusController.getStatuses);
router.route("/:statusId").get(StatusController.getStatusesById);
router.route("/title/:title").get(StatusController.getStatusesByTitle);
router.route("/title/search/:search").get(StatusController.getStatusesByTitleSearch);
export default router;
