import http from "http"
import express from "express"
import cors from "cors"
import path from "path";
import Notification from "../server/routes/notification.js"
import { InitializeSocket } from "./utils/socketconnection.js";

const app = express();
const server = http.createServer(app);


app.use(express.static(path.join('./public')));
app.use(cors())

app.use(express.json())
app.use("/api/notification",Notification)

app.get("/",(req,res)=>{
    res.send("<h1>hello<h1")
})

InitializeSocket(server)
server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});


