const express = require ('express')
const socketio = require ('socket.io')
const http = require('http')
const router = require('./router')


const PORT = process.env.PORT | 5000

const app = express()
const server = http.createServer(app);

const io = socketio(server)
io.on('connection', (socket) => {
    console.log('we had a new connection !!!');
    socketio.on('disconnect', () => {
        console.log('User had left !!!');
    })
})

app.use(router);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))