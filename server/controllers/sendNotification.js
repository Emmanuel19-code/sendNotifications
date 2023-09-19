import { sendNotificatonMessage } from "../utils/socketconnection.js"


export const sendNotification =async(req,res)=>{
  const {notification} = req.body
  sendNotificatonMessage(notification)
  res.status(200).json({
    msg:"message successfully  sent"
  })
}