import { Server } from "socket.io";

let io;

export const InitializeSocket = async(server)=>{
 io = new Server(server);
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });

    //socket.on('chat message', (msg) => {
    //    io.emit('chat message', msg);
    //});
});
}

export const sendNotificatonMessage = (message)=>{
    if(io){
        io.emit('notification',message)
    }else{
        io.emit('notification',message)
    }
}