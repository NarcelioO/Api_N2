import { Router } from "express";
import userController from "../controllers/userController.js";
const router = Router();

router.route("/")
        .get((req,res)=> userController.list(req, res))

export default router;