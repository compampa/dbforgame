const {Server} = require('socket.io')
const app = require('./server')
const http = require('http')

const {BattleRoom} = require('./db/models')

const server = http.createServer(app)

const io = new Server(server, {cors: {origin: true}})

// const players = []
let storage = []
let arr = []
let chatPlayers = []
io.on('connection', socket => {

    socket.on('player-connected', (name) => {
        chatPlayers.push({name})
        io.emit('player-connected', chatPlayers)
    })
    socket.on('player-disconnected', (name) => {
        chatPlayers =  chatPlayers.filter(chatPlayer => chatPlayer.name !== name)
        io.emit('player-disconnected', chatPlayers)
    })

    socket.on('message', ({name, message}) => {
        io.emit('message', {name, message})
    })

    socket.on('join-room', async (room, player, battlePlayer) => {
        try {
            socket.join(room.id)
            const currentRoom = await BattleRoom.findOne({where: {id: Number(room.id)}})

            if (Number(currentRoom.initial_character_id) === Number(player.id)) {
                arr.push({player, battlePlayer})
                io.to(room.id).emit('join-room', arr)
            } else {
                arr.push({player, battlePlayer})
                await BattleRoom.update({opponent_id: Number(player.id), description: 'active'}, {where: {id: room.id}})
                const currentRoom2 = await BattleRoom.findOne({where: {id: Number(room.id)}})
                io.to(room.id).emit('join-room', {arr, currentRoom2})
            }
            // await BattleRoom.update({opponent_id: Number(player.id), description: 'active'}, {where: {id: room.id}})
        } catch (e) {
            console.log(e)

        }
    })
    socket.on('join-room-watcher', async (room, player) => {
        try {
            socket.join(room.id)
            const currentRoom = await BattleRoom.findOne({where: {id: Number(room.id)}})
            const initial_character = arr.find(e => {
                return (e.player.id === currentRoom.initial_character_id)
            })
            const opponent = arr.find(e => {
                return (e.player.id === currentRoom.opponent_id)
            })
            socket.to(room.id).emit('join-room-watcher',
                {current_room: currentRoom.id, initial_character, opponent})
            // if (Number(currentRoom.initial_character_id) === Number(player.id)) {
            //     arr.push({player})
            //     io.to(room.id).emit('join-room', arr)
            // } else {
            //     arr.push({player, battlePlayer})
            //     await BattleRoom.update({opponent_id: Number(player.id), description: 'active'}, {where: {id: room.id}})
            //     const currentRoom2 = await BattleRoom.findOne({where: {id: Number(room.id)}})
            //     io.to(room.id).emit('join-room', {arr, currentRoom2})
            // }
            // await BattleRoom.update({opponent_id: Number(player.id), description: 'active'}, {where: {id: room.id}})
        } catch (e) {
            console.log(e)

        }
    })
    socket.on('to_instance', ({id, player, battlePlayer}) => {
        storage.push({id, player, battlePlayer})
    })
    // let currBattle = []
    socket.on('punch', async (room, player) => {
        socket.join(room.id)
        let battle = storage.filter(e => e.id === room.id)
        const player_two = battle.find(e => e.player.id !== player.id)
        const player_one = battle.find(e => e.player.id === player.id)
        const message = 'Holy Christ'
        if (player_one) {
            if (player_two){
                const db_room = await BattleRoom.findByPk(Number(room.id))
                io.to(room.id).emit('send-message', ({message, db_room, player_two, player_one}))
                storage = storage.filter(el => el.id !==room.id)
                battle = []
            }
        }

    })
    socket.on('close-private-room', (room, playerFromFront) => {
        arr = arr.filter(client => playerFromFront.id !== client.player.id)
        socket.to(room.id).emit('close-private-room')
    })

})

module.exports = server