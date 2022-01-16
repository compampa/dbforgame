const {Server} = require('socket.io')
const app = require('./server')
const http = require('http')

const { BattleRoom } = require('./db/models')

const server = http.createServer(app)

const io = new Server(server, {cors: {origin: true}})

// const players = []

io.on('connection', socket => {
    socket.on('message', ({name, message}) => {
        io.emit('message', {name, message})
    })

    socket.on('join-room', async (room, player, battlePlayer, cb) => {
        try{
        socket.join(room.id)
            const currentRoom = await BattleRoom.findOne({where: {id: Number(room.id)}})
            if (Number(currentRoom.initial_character_id) !== Number(player.id)){
                const temp = await BattleRoom.update({opponent_id: Number(player.id), description: 'active'}, {where: {id: room.id}})
                io.to(room.id).emit('join-room', currentRoom)
            } else io.to(room.id).emit('join-room', currentRoom)
                 // await BattleRoom.update({opponent_id: Number(player.id), description: 'active'}, {where: {id: room.id}})
        } catch (e) {
            console.log(e)
        }
    })

    socket.on('punch', async (room, player, battlePlayer) => {

        socket.join(room.id)
        const newRoom = await BattleRoom.findByPk(Number(room.id))
        // players.map(el => {
        //     if (el.player.nickName === player.nickname) {
        //         return {player, battlePlayer}
        //     } else {
        //         return el
        //     }
        // })
        io.to(room.id).emit('punch', newRoom)
    })

})

module.exports = server