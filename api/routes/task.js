import { taskController } from "../controllers"
import { Router } from "express";

const router = Router();

router.get("/", taskController.getTask);
router.get("/:taskId", taskController.getTaskById);


export default router;