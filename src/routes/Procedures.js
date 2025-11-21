import {Router} from "express";
import procedureController from "../controllers/procedureController.js";

const router = Router();

router.route("/")
.get((req, res)=>procedureController.list(req, res))
.post((req, res)=>procedureController.create(req, res))

export default router