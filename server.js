require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require("path");
const cookieParser = require('cookie-parser')
const index = require('./src/routes/index')
const errorMiddleware = require('./src/middlewares/errorMiddleware')

const router = require('./routes/indexRouter');
// const auctionRouter = require('./routes/auction')

const app =require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {cors: {origin: true}})

// const app = express();

const PORT =  4000 //   process.env.PORT ??
app.use(express.static(path.join(__dirname, 'build')))
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser());

let players = []

io.on('connection', socket => {
    socket.on('message', ({name, message}) => {
        io.emit('message', {name, message})
    })

    socket.on('join-room', (room, player, battlePlayer, cb) => {
        socket.join(room.id)
        players.push({player, battlePlayer})
        io.to(room.id).emit('join-room', players)
    })

    socket.on('punch', (room, player, battlePlayer) => {
        socket.join(room.id)
        players.map(el => {
            if (el.player.nickName === player.nickname) {
                return {player, battlePlayer}
            } else {
                return el
            }
        })
        io.to(room.id).emit('punch', players)
    })
})



// app.use('/battle')
app.use('/db', router);
app.use('/api', index)
// app.use('/auction', auctionRouter)
app.get('/*', (req, res) => {
    // res.sendFile(path.join((__dirname, 'build', 'index.html')))
    res.sendFile('./build/index.html', {root: __dirname})

})
app.use(errorMiddleware)

// http.listen(PORT, () => console.log(`listening port ${PORT}`))

app.listen(PORT, () => {
    console.log(`------------------- here we  go on  ${PORT}-------------------`);
});
