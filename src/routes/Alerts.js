import { Router } from "express"
import AlertController from "../controllers/alertController.js"

const router = Router();

router.route("/")
        .get((req,res)=> AlertController.list(req, res))
        .post((req, res)=> AlertController.create(req, res))
        .delete((req, res)=>AlertController.delete(req, res))



export default router
