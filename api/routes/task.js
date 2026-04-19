import { taskController } from "../controllers"
import { Router } from "express";

const router = Router();

router.get("/", taskController.getTask);


export default router;