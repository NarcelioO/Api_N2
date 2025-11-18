import { Router } from "express"
import AlertController from "./controllers/AlertController.js"

const router = Router();

router.route("/")
        .get((req,res)=> AlertController.list(req, res))
        .post((req, res)=> AlertController.create(req, res))



export default router
