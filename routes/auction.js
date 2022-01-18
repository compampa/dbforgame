const router = require('express').Router();
const {Op} = require('sequelize')
const {
    Character, Class, User, Items,
    Grade, Inventory, Parameter,
    Equipment, PlayerClass, Classes, CharacterStats, LEVELS,
    CurrentCondition, Creep, CreepInventory, BattleRoom, Auction
} = require('../db/models')

router.get('/', async (req,res)=>{
    // const allItems = await Auction.findAll({raw: true})
    const allItems = await getItemsForFront()
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
        const responseWithoutFilter = await getItemsForFront()
        const serverResponse = responseWithoutFilter.filter(e => e.type === value)
        res.json(serverResponse)
    } catch (e) {
        console.log(e)
        res.json({message: 'Bad request'})
    }
})

router.post('/buy-item', async (req, res) => {
    const {id, buyer_id} = req.body
    try {
        const auctionItem = await Auction.findByPk(Number(id))
        const customer = await Character.findByPk(Number(buyer_id))
        const seller = await Character.findByPk(Number(auctionItem.character_id))
        if (customer.id !== seller.id) {
        if (customer.balance > auctionItem.price) {
            const newCustomerBalance = customer.balance - auctionItem.price
            const newSellerBalance = seller.balance + auctionItem.price
            await Character.update(
                {balance: newCustomerBalance},
                {where: {id: customer.id}})
            await Character.update(
                {balance: newSellerBalance},
                {where: {id: seller.id}})
            await Auction.destroy({where: {id: auctionItem.id}})
            const inventory = await Inventory.create(
                {character_id: customer.id,
                        item_id: auctionItem.item_id})
            const item = Items.findByPk(Number(inventory.item_id))
            res.json(item)
        } else return res.json({message: 'do not enough money'})
        } else return res.json({message: 'this is your item, you cant buy it'})
    } catch (e) {
        console.log(e)
    }
})

module.exports = router

async function getItemsForFront() {
    const response = await Auction.findAll()
    const responseWithoutFilter = []
    for (let i = 0; i < response.length; i += 1) {
        const item = await Items.findOne({where: {id: response[i].item_id}, raw: true})
        const stats = await Parameter.findOne({where: {id: item.grade_id},raw:true})
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
            regular_price: item.price,
            stats: {
                str: stats.str,
                agl: stats.agl,
                int: stats.int,
                def: stats.def,
                evs: stats.evs,
                dmg: stats.dmg
            }
        })
    }
    return responseWithoutFilter
}