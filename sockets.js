const {Server} = require('socket.io')
const app = require('./server')
const http = require('http')

const { BattleRoom } = require('./db/models')

const server = http.createServer(app)

const io = new Server(server, {cors: {origin: true}})

const players = []

io.on('connection', socket => {
    socket.on('message', ({name, message}) => {
        io.emit('message', {name, message})
    })

    socket.on('join-room', async (room, player, battlePlayer, cb) => {
        socket.join(room.id)
        console.log('PLAAAAAYER ================>',player)
        const temp = await BattleRoom.create({initial_character: player.id, description: 'idle'})
        console.log(temp)
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

module.exports = server