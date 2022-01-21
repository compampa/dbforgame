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
            //     where:
            //         {item_id: Number(item.id), character_id: Number(player.id)}
            //     , raw: true
            // })
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
        await Inventory.create({item_id: Number(item.id), character_id: Number(player.id)})
    } catch (e) {
        console.log(e)
    }
})



module.exports = router