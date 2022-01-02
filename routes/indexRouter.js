const router = require('express').Router();
const {Character, Class, User, Items, Grade, Inventory, Parameter} = require('../db/models')

router.get('/', async (req, res) => {
        res.json({message: 'OK'})
    }
);
router.get('/get-user', async (req, res) => {
    const user = await User.findAll()
    res.json(user)
})
router.get('/get-character', async (req, res) => {
    const character = await Character.findAll()
    res.json(character)
})
router.get('/get-classes', async (req, res) => {
    const classes = await Class.findAll()
    res.json(classes)
})
router.get('/get-armor', async (req, res) => {
    const armor = await Items.findAll()
    res.json(armor)
})
router.get('/get-specific-inventory', async (req, res) => {
    const thing = await Inventory.findAll({where: {character_id: 1}, raw: true}) // change id to req.params
    // getting all items id from inventory
    const arr_items_id = thing.map(e => e.item_id)
    let result = []
    for (let i = 0; i < arr_items_id.length; i += 1) {
        const item = await Items.findOne({where: {id: arr_items_id[i]}, raw: true})
        result.push(item)
    }
    // getting meta info for items in inventory
    const grades = result.map(e => e.grade_id)
    const gradesTitle = []
    for (let i = 0; i < grades.length; i += 1) {
        const grade = await Grade.findOne({where: {id: grades[i]}, raw: true})
        gradesTitle.push(grade)
    }
    const stats = gradesTitle.map(e => e.stat_id)
    const statsMeta = []
    for (let i = 0; i < stats.length; i += 1) {
        const stat = await Parameter.findByPk(Number(stats[i]), {raw: true})
        statsMeta.push(stat)
    }
    result.map((e, i) => {
        e.str = statsMeta[i].str
        e.agl = statsMeta[i].agl
        e.int = statsMeta[i].int
        e.def = statsMeta[i].def
        e.evs = statsMeta[i].evs
        e.dmg = statsMeta[i].dmg
        e.grade = gradesTitle[i].title
        return e
    })
    res.json(result)
})

module.exports = router