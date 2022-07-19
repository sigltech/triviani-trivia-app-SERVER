const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const socketPort = process.env.SOCKET_PORT || 8000;
const userRoutes = require('./routes/Users')
// const port = process.env.PORT || 3000

const app = express();

app.use(cors());




// const userRoutes = require('./routes/users')

// const leaderRoutes = require('./routes/leader')

// app.use('/users', userRoutes)
// app.use('/leaderboard', leaderRoutes)

// app.get('/', (req, res) => res.send('Welcome to the library'))



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





// app.listen(port, () => console.log(`Express now departing from port ${port}!`))

// const app = require('./server')

const port = process.env.PORT || 3001


app.get('/', (req, res) => res.send('Welcome to the library'))

app.use('/user', userRoutes)


app.listen(port, () => console.log(`Express now departing from port ${port}!`))
