const {Server} = require('socket.io')
const app = require('./server')
const http = require('http')

const {BattleRoom} = require('./db/models')

const server = http.createServer(app)

const io = new Server(server, {cors: {origin: true}})

// const players = []
const storage = [
    // {
    //  roomId: id,
    //  message: message,
    //  player: playerId
    // }
]
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
    socket.on('to_instance', ({id, player}) => {
        storage.push({id, player})
    })
    // let currBattle = []
    socket.on('punch', async (room, player, battlePlayer) => {
        console.log('+++++++++++++++storage+++++++++++++++++++',storage)
        socket.join(room.id)
        let battle = storage.filter(e => e.id === room.id)
        const player_two = battle.find(e => e.player !== player.id)
        console.log('player_two===================>',player_two)
        const player_one = battle.find(e => e.player === player.id)
        console.log('player_one==================>',player_one)
        const message = 'Holy Christ'
        if (player_one) {
            console.log('ONE')
            if (player_two){
                console.log('TWO')
                io.to(room.id).emit('send-message', ({message, player_two, player_one}))
                battle = []
            }
        }



        // let currBattle = []
        // const temp = {player, battlePlayer}
        //
        // currBattle.push(temp)
        //
        // console.log('-----------------------')
        // console.log('player =======>', player.nickName)
        // console.log('currBattle======> LENGTH',currBattle.length)
        // console.log('-----------------------')
        // console.table(currBattle)
        // console.log('-----------------------')

        // if (currBattle.length === 2){
        //     io.to(room.id).emit('ready-to-hit', {currBattle})
            // currBattle =[]
            // console.log('=======================')
            // console.log('currbattle refresh')
            // console.log('=======================')
        // }
        // io.to(room.id).emit('punch', {arr, currentRoom2, currBattle})

    })
    socket.on('close-private-room', (playerFromFront) => {
        arr = arr.filter(client => playerFromFront.id !== client.player.id)
    })

})

module.exports = server