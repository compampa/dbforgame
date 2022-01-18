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
            await Auction.create({item_id, character_id: Number(characterInventory[0].character_id), price})
            res.json(getItemFromInventory)
        } else return res.json({message: 'something went wrong'})
    } catch (e) {
        console.log(e)
    }

})

router.post('/filter-items', async (req,res) => {
    const {value} = req.body
    try {
        const response = await Auction.findAll()
        const responseWithoutFilter = []
        for (let i = 0; i < response.length; i += 1) {
            const item = await Items.findOne({where: {id: response[i].item_id}, raw: true})
            responseWithoutFilter.push({
                auction_id: response[i].id,
                character_id: response[i].character_id,
                item_id: response[i].item_id,
                grade_id: item.grade_id,
                item_name: item.item_name,
                type: item.type,
                info: item.info,
                img: item.img,
                auction_price: response[i].price,
                regular_price: item.price
            })
        }
        const serverResponse = responseWithoutFilter.filter(e => e.type === value)
            // attributes: ['id', 'item_id', 'price', 'character_id', 'grade_id', 'item_name', 'type', 'info', 'img'
            // include: [{
            //     model: Character,
            //     through: {
            //         model: Equipment,
            //         // where: { type: value}
            //     }
                // where: {type: value}
        //     }],
        //     where: {type: value},
        // })
        // const allItemsRaw = await Auction.findAll({raw: true})
        // const allItemsIds = allItemsRaw.map(e => e.item_id)
        // const itemsRaw = []
        // for ( let i = 0; i < allItemsIds.length; i += 1) {
        //     itemsRaw.push(await Items.findByPk(allItemsIds[i]))
        // }
        // const oneTypeItems = await Items.findAll({where: {id: allItemsIds, type: value}, raw:true})
        // const oneTypeItemsIds = oneTypeItems.map(e => e.id)
        // const  = await Auction.findAll({where: {item_id: oneTypeItemsIds}, raw: true})
        res.json(serverResponse)
    } catch (e) {
        console.log(e)
        res.json({message: 'Bad request'})
    }
})

module.exports = router