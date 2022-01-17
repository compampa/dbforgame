const router = require('express').Router();
const {Op} = require('sequelize')
const {
    Character, Class, User, Items,
    Grade, Inventory, Parameter,
    Equipment, PlayerClass, Classes, CharacterStats, LEVELS,
    CurrentCondition, Creep, CreepInventory, BattleRoom, Auction
} = require('../db/models')

router.get('/', async (req,res)=>{
    const allItems = await Auction.findAll({raw: true})
    res.json({allItems})
})

router.post('/place-lot', async (req, res) =>{
    console.log(req.body)
    const { item_id, character_id, price } = req.body.data
    // const character = Character.findByPk(character_id)
    try {
        const characterInventory = await Inventory.findAll({where: {character_id}, raw: true})
        console.log(characterInventory)
        const inventoryItems = characterInventory.map(e => e.item_id) // TODO REFACTOR
        console.log(inventoryItems)
        if (inventoryItems.includes(item_id)){
            const getItemFromInventory = await Inventory.findOne({where:{character_id, item_id},raw: true})
            await Inventory.destroy({where:{id: getItemFromInventory.id}})
            await Auction.create({item_id, character_id, price})
            res.json({message: 'OK'})
        } else return res.json({message: 'something went wrong'})
    } catch (e) {
        console.log(e)
    }

})

module.exports = router