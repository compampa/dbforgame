const router = require('express').Router();
const {Op} = require('sequelize')
const {
    Character, Class, User, Items,
    Grade, Inventory, Parameter,
    Equipment, PlayerClass, Classes, CharacterStats, LEVELS,BattleLog,
    HitEN, CurrentCondition, Creep, CreepInventory, BattleRoom, Auction, hitens
} = require('../db/models')

router.post('/en', async (req, res) =>{
    const {body_part, type_of_action, player_id, db_room} = req.body
    try {
        const phrases = await hitens.findAll({where: {body_part, type_of_action}, raw: true})
        //{where: {body_part, type_of_action}, raw: true}
        const phrase = phrases[getRandomNumber(0, phrases.length - 1)]
        const battleLog = await BattleLog.create({
            battle_room_id: Number(db_room.id),
            hit_id: Number(phrase.id),
            player_id: Number(player_id)
        })
        res.json({
            phrase: phrases[getRandomNumber(0, phrases.length - 1)],
            battleLog
        })
    } catch (e) {
        console.log(e)
    }
})

router.post('/get-reward', async (req,res)=> {
                        // true & false
    const {playerId, WinOrLoss, room} = req.body
    const player = await Character.findByPk(Number(playerId), {raw:true})
    const currentBalance = player.balance
    const currentExp = player.exp
    if (WinOrLoss) {
        await Character.update({balance: currentBalance + 100,
        exp: currentExp + 30}, {where: {id: player.id}})
    } else  {
        await Character.update({balance: currentBalance + 10,
            exp: currentExp + 5}, {where: {id: player.id}})
    }
    const response = await Character.findByPk(Number(player.id))
    await BattleRoom.update({description: 'closed'}, {where:{id: Number(room.id)}})
    return res.json(response)
})

router.post('/get-mob-reward', async (req,res)=> {
    // true & false
    const {playerId, WinOrLoss, itemId} = req.body
    const player = await Character.findByPk(Number(playerId), {raw:true})
    const currentBalance = player.balance
    const currentExp = player.exp
    if (WinOrLoss) {
        await Character.update({balance: currentBalance + 20,
            exp: currentExp + 15}, {where: {id: player.id}})
        await Inventory.create({item_id: Number(itemId),
            character_id: Number(player.id)})
    } else  {
        await Character.update({balance: currentBalance + 5,
            exp: currentExp + 5}, {where: {id: player.id}})
    }
    const response = await Character.findByPk(Number(player.id))
    return res.json(response)
})

// router.get('/watch-battle/:id', async (req,res)=> {
//     const { id } = req.params
//     try {
//         const room = BattleRoom.findByPk(Number(id))
//         return res.json(room)
//     } catch (e) {
//         console.log(e)
//     }
// })

// router()

module.exports = router

function getRandomNumber(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}