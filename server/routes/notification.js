import express from "express"
import { sendNotification } from "../controllers/sendNotification.js"
const router = express.Router()



router.post("/send_notification",sendNotification)

export default router