const router = require('express').Router();
const {Op} = require('sequelize')
const {Character, Class, User, Items, Grade, Inventory, Parameter, Equipment} = require('../db/models')

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
    const params = gradesTitle.map(e => e.stat_id)
    const paramsMeta = []
    for (let i = 0; i < params.length; i += 1) {
        paramsMeta.push(await Parameter.findByPk(Number(params[i]), {raw: true}))
    }
    result.map((e, i) => {
        e.stats = paramsMeta[i]
        e.grade = gradesTitle[i].title
        delete e.stats.id
        delete e.stats.createdAt
        delete e.stats.updatedAt
        delete e.createdAt
        delete e.updatedAt
        return e
    })
    res.json(result)
})

router.get('/get-specific-equipment/:id', async (req, res) => {
    const equipment = await Equipment.findAll({where: {character_id: req.params.id}, raw: true})

    const itemsId = equipment.map(e => e.item_id)
    console.log('ITEMS IDS', itemsId)
    const result = []
    for (let i = 0; i < itemsId.length; i += 1) {
        const item = await Items.findOne({where: {id: itemsId[i]}, raw: true})
        result.push(item)
    }
    // building Accessory Set
    const accRaw = await Items.findAll({
        where: {id: itemsId, [Op.or]: [{type: 'ring'}, {type: 'sphere'}, {type: 'necklace'}]},
        raw: true
    })
    const accGrades = accRaw.map(e => e.grade_id)
    const accGradesRaw = []
    for (let i = 0; i < accGrades.length; i += 1) {
        const armorGrade = await Grade.findByPk(accGrades[i], {raw: true})
        accGradesRaw.push(armorGrade)
    }
    const accParams = accGradesRaw.map(e => e.stat_id)
    const accParamsRaw = []
    for (let i = 0; i < accParams.length; i += 1) {
        accParamsRaw.push(await Parameter.findByPk(accParams[i], {raw: true}))
    }
    const accessories_set = [...accRaw]
    accessories_set.map((e, i) => {
        e.grade = accGradesRaw[i].title
        e.stats = accParamsRaw[i]
        delete e.stats.id
        delete e.stats.createdAt
        delete e.stats.updatedAt
        delete e.createdAt
        delete e.updatedAt
    })

    // building Armor set
    const armorRaw = await Items.findAll({
        where: {id: itemsId, [Op.or]: [{type: 'head'}, {type: 'body'}, {type: 'legs'}]},
        raw: true
    })
    const armorGrades = armorRaw.map(e => e.grade_id)
    const armorGradesRaw = []
    for (let i = 0; i < armorGrades.length; i += 1) {
        const armorGrade = await Grade.findByPk(armorGrades[i], {raw: true})
        armorGradesRaw.push(armorGrade)
    }
    const armorParams = armorGradesRaw.map(e => e.stat_id)
    const armorParamsRaw = []
    for (let i = 0; i < armorParams.length; i += 1) {
        armorParamsRaw.push(await Parameter.findByPk(armorParams[i], {raw: true}))
    }
    const armor_set = [...armorRaw]
    armor_set.map((e, i) => {
        e.grade = armorGradesRaw[i].title
        e.stats = armorParamsRaw[i]
        delete e.stats.id
        delete e.stats.createdAt
        delete e.stats.updatedAt
        delete e.createdAt
        delete e.updatedAt
    })

    // building Weapon
    const weapRaw = await Items.findAll({
        where: {id: itemsId, type: 'weapon'},
        raw: true
    })
    const weapGrades = weapRaw.map(e => e.grade_id)
    const weapGradesRaw = []
    for (let i = 0; i < weapGrades.length; i += 1) {
        const weapGrade = await Grade.findByPk(weapGrades[i], {raw: true})
        weapGradesRaw.push(weapGrade)
    }
    console.log(weapGradesRaw)
    const weapParams = weapGradesRaw.map(e => e.stat_id)
    const weapParamsRaw = []
    for (let i = 0; i < weapParams.length; i += 1) {
        weapParamsRaw.push(await Parameter.findByPk(weapParams[i], {raw: true}))
    }
    const weapon = [...weapRaw]
    weapon.map((e, i) => {
        e.grade = weapGradesRaw[i].title
        e.stats = weapParamsRaw[i]
        delete e.stats.id
        delete e.stats.createdAt
        delete e.stats.updatedAt
        delete e.createdAt
        delete e.updatedAt
    })
    console.log(weapon)
    return res.json({armor_set, accessories_set, weapon})
})

module.exports = router