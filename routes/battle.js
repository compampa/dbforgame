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
        await BattleLog.create({
            battle_room_id: Number(db_room.id),
            hit_id: Number(phrase.id),
            player_id: Number(player_id)
        })
        res.json(phrases[getRandomNumber(0, phrases.length - 1)])
    } catch (e) {
        console.log(e)
    }
})


module.exports = router

function getRandomNumber(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}