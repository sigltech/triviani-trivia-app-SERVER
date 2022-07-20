const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const socketPort = process.env.SOCKET_PORT || 8000;
// const port = process.env.PORT || 3000

const app = express();

app.use(cors());



// socket.io below ///

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: 'Content-Type, Authorization, X-Requested-With, X-Socket-ID'
    }
});

io.on('connection', (socket) => {
    console.log(`user connected: ${socket.id}`)

    socket.on("join_room", data => {
        socket.join(data)
    })

    socket.on("send_message", data => {
        // console.log(data)
        socket.to(data.room).emit("receive_message", data)
    })


})

server.listen(socketPort, () => {
    console.log(`Socket is running on port ${socketPort}`);
})
