const express = require('express');
const cors = require('cors');
const { Server } = require('socket.io');
const http = require('http');
const socketPort = process.env.SOCKET_PORT || 8000;

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET','POST','PUT','DELETE'],
        allowedHeaders: 'Content-Type, Authorization, X-Requested-With, X-Socket-ID'
    }
});

server.listen(socketPort, () => {
    console.log(`Server is running on port ${socketPort}`);
})
