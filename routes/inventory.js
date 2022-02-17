const router = require('express').Router();
const {Op} = require('sequelize')
const {
    Character, Class, User, Items,
    Grade, Inventory, Parameter,
    Equipment, PlayerClass, Classes, CharacterStats, LEVELS,BattleLog,
    HitEN, CurrentCondition, Creep, CreepInventory, BattleRoom, Auction, hitens
} = require('../db/models')

router.post('/set-to-equip', async (req,res)=> {
    console.log(req.body)
    const {player, item} = req.body
    try {
        const currentEquip = await Equipment.findAll({where: {character_id: Number(player.id)}})
        const potentialItem = await Items.findByPk(Number(item.id))
        const currentTypes = currentEquip.map(e => e.type)
        console.log(currentTypes)
        if(!currentTypes.includes(potentialItem.type)) {
            console.log('HERE')
            const temp = await Items.findByPk(Number(item.id),{raw:true})
            console.log('TEMP', temp)
            await Inventory.destroy({where: {id: temp.id}})

            await Equipment.create({item_id: Number(item.id), character_id: Number(player.id)})
            res.json({message: "OK"})
        } else return res.json({message: 'slot is not available'})
    } catch (e) {
        console.log(e)
    }
})
router.post('/add-item', async (req,res)=> {
    console.log(req.body)
    const {player, item} = req.body
    try {
        const character = Character.findByPk(Number(player.id))
        const currentBalance = character.balance - item.price
        await Character.update({balance: Number(currentBalance) }, {where: {id: Number(player.id)}})

        await Inventory.create({item_id: Number(item.id), character_id: Number(player.id)})
        res.sendStatus(200)
    } catch (e) {
        console.log(e)
    }
})



module.exports = router