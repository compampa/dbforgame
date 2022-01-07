const router = require('express').Router();
const {Op} = require('sequelize')
const {
    Character, Class, User, Items,
    Grade, Inventory, Parameter,
    Equipment, PlayerClass, Classes, CharacterStats, LEVELS,
    CurrentCondition, Creep, CreepInventory, BattleRoom
} = require('../db/models')

router.get('/', async (req, res) => {
        res.json({message: 'OK'})
    }
);
router.get('/get-users', async (req, res) => {
    const user = await User.findAll()
    res.json(user)
})
router.get('/get-characters', async (req, res) => {
    const character = await Character.findAll()
    res.json(character)
})
router.get('/get-classes', async (req, res) => {
    const classes = await PlayerClass.findAll()
    res.json(classes)
})
router.get('/get-items', async (req, res) => {
    const armor = await Items.findAll()
    res.json(armor)
})
router.get('/get-specific-inventory/:id', async (req, res) => {
    const result = await getInventory(req.params.id)
    res.json(result)
})

router.get('/get-specific-equipment/:id', async (req, res) => {
    try {
        const equipment = await Equipment.findAll({where: {character_id: req.params.id}, raw: true})
        const itemsId = equipment.map(e => e.item_id)
        const total_stats = await getStatsFromItems(itemsId)
        const accessories_set = await getAccessorySet(itemsId)
        const armor_set = await getArmorSet(itemsId)
        const weapon = await getWeapon(itemsId)
        return res.json({armor_set, accessories_set, weapon, total_stats})
    } catch (e) {
        console.log(e)
    }
})

router.get('/get-character-stats/:id', async (req, res) => {
    try {
        const stats = await getCharacterStats(req.params.id)
        res.json(stats)
    } catch (e) {
        console.log(e);
    }
})

router.get('/ready-for-fun/:id', async (req, res) => {
    try {
        const character = await User.findByPk(req.params.id)
        console.log(character)
        const equipment = await Equipment.findAll({where: {character_id: character.id}, raw: true})
        const itemsId = equipment.map(e => e.item_id)
        const accessories_set = await getAccessorySet(itemsId)
        const armor_set = await getArmorSet(itemsId)
        const weapon = await getWeapon(itemsId)
        const total_stats = await getCharacterStatsFull(req.params.id, itemsId)
        const nickName = total_stats.nickname
        const lvl = total_stats.lvl
        const exp = total_stats.exp
        const hp = total_stats.hp
        const mp = total_stats.mp
        const ap = total_stats.ap
        const playerClass = total_stats.class
        const avatar = total_stats.avatar
        return res.json({
            armor_set, accessories_set, weapon, total_stats, nickName,
            lvl, exp, hp, mp, ap, playerClass, avatar
        })
    } catch (e) {
        console.log(e);
    }
})

router.get('/get-mob-current-lvl/:id', async (req, res) => {
    const character = await Character.findByPk(req.params.id, {raw: true})
    const lvl = await getLVL(character)
    const creeps = await CurrentCondition.findAll({where: {lvl_id: Number(lvl), [Op.and]: {class_id: [4, 5, 6]}}, raw: true})
    const temp = creeps[Math.floor(Math.random() * creeps.length)]
    const creepStats = await CharacterStats.findByPk(temp.stats_id, {raw: true})
    const creepClass = await PlayerClass.findByPk(temp.class_id, {raw: true})
    const tempCreep = await Creep.create({class_id: creepClass.id, creep_inventory_id: character.id})
    const items = await Items.findAll({raw: true})
    const drop = items[Math.floor(Math.random() * items.length)]
    const money = getRandomNumber((lvl * 5), (lvl * 9))
    const exp = getRandomNumber(lvl, (lvl * 4))
    const bag = await CreepInventory.create({creep_id: tempCreep.id, item_id: drop.id, cash: money, exp: exp})
    // const bag = await Items.findByPk(tempInventory.id, {raw: true})
    res.json({creepClass, creepStats, bag})
})

router.post('/post-battle-room/:id', async (req, res) => {
    const room = await BattleRoom.create({initial_character_id: req.params.id})
    res.json({room})
})

router.get('/get-all-rooms', async (req, res) => {
    const rooms = await BattleRoom.findAll({raw: true})
    res.json(rooms)
})

router.post('/sell-items', async (req, res) => {
    const {id, items} = req.body
    console.log(req.body)
    const character = await Character.findByPk(id, {raw: true})
    const itemsOnCharacter = await getInventory(id)
    for (let i = 0; i < items.length; i += 1) {
        if (itemsOnCharacter.includes(items[i])) {
            const item = await Items.findByPk(items[i].id, {raw: true})
            await Inventory.destroy({where: {character_id: character.id, item_id: item.id}})
            await Character.increment({cash: item.cash}, {where: {id: character.id}})
        }
    }
})

router.get('/get-all-classes', async (req, res) => {
    try {
        const classes = await PlayerClass.findAll({where: {id: [1, 2, 3]}, raw: true})
        res.json(classes)
    } catch (e) {
        console.log(e)
        res.sendStatus(400)
    }
})

router.post('/set-player-class', async (req, res) => {
    const {user_id, class_id, nickname} = req.body
    try {
        const nicknameCheck = await Character.findOne({where: {nickname}})
        if (!nicknameCheck) {
            const character = await Character.create({user_id, nickname, exp: 0, balance: 0})
            await Classes.create({player_class_id: class_id, character_id: character.id})
            res.sendStatus(201)
        }
    } catch (e) {
        console.log(e)
        res.sendStatus(400, 'This nickname is already in use!')
    }
})


function getRandomNumber(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// router.get('/mob-for-battle/:id', async (req, res) => {
//     const character = await Character.findByPk(req.params.id)
//     const lvl = getLVL(character)
//
// })

async function getWeapon(arr) {
    const weapRaw = await Items.findAll({
        where: {id: arr, type: 'weapon'},
        raw: true
    })
    const weapGrades = weapRaw.map(e => e.grade_id)
    const weapGradesRaw = []
    for (let i = 0; i < weapGrades.length; i += 1) {
        const weapGrade = await Grade.findByPk(weapGrades[i], {raw: true})
        weapGradesRaw.push(weapGrade)
    }
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
    return weapon
}

async function getStatsFromItems(arr) {
    const totalStatsRaw = []
    for (let i = 0; i < arr.length; i += 1) {
        const item = await Items.findByPk(arr[i], {raw: true})
        totalStatsRaw.push(item)
    }
    const totalStatsGradesRaw = totalStatsRaw.map(e => e.grade_id)
    const totalStatsGrades = []
    for (let i = 0; i < totalStatsGradesRaw.length; i += 1) {
        const grade = await Grade.findByPk(totalStatsGradesRaw[i], {raw: true})
        totalStatsGrades.push(grade)
    }
    const totalStatsFromGrades = totalStatsGrades.map(e => e.stat_id)
    const totalStat = []
    for (let i = 0; i < totalStatsFromGrades.length; i += 1) {
        const stat = await Parameter.findByPk(totalStatsFromGrades[i], {raw: true})
        totalStat.push(stat)
    }
    const total_stats = {
        str: 0,
        agl: 0,
        int: 0,
        def: 0,
        evs: 0,
        dmg: 0
    }
    totalStat.forEach(e => {
        total_stats.str += e.str
        total_stats.agl += e.agl
        total_stats.int += e.int
        total_stats.def += e.def
        total_stats.evs += e.evs
        total_stats.dmg += e.dmg
    })
    return total_stats
}

async function getArmorSet(arr) {
    const armorRaw = await Items.findAll({
        where: {id: arr, [Op.or]: [{type: 'head'}, {type: 'body'}, {type: 'legs'}]},
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
    return armor_set
}

async function getAccessorySet(arr) {
    const accRaw = await Items.findAll({
        where: {id: arr, [Op.or]: [{type: 'ring'}, {type: 'sphere'}, {type: 'necklace'}]},
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
    return accessories_set
}

async function getCharacterStats(id) {
    const character = await Character.findByPk(id, {raw: true})
    const playerClassId = await Classes.findOne({where: {character_id: character.id}, raw: true})
    const playerClass = await PlayerClass.findOne({where: {id: playerClassId.player_class_id}, raw: true})
    console.log(playerClass);
    // LEVEL!
    const level = await LEVELS.findAll({where: {exp: {[Op.gt]: Number(character.exp)}}, raw: true})
    const currentLevel = level[0].value - 1
    const playerStats = await CurrentCondition.findOne({
        where: {class_id: playerClass.id, lvl_id: Number(currentLevel)},
        raw: true
    })
    const currentStatsRaw = await CharacterStats.findOne({where: {id: playerStats.stats_id}, raw: true})
    return currentStatsRaw
}

async function getLVL(obj) {
    const level = await LEVELS.findAll({where: {exp: {[Op.gt]: Number(obj.exp)}}, raw: true})
    const currentLevel = level[0].value - 1
    return currentLevel
}

async function getCharacterStatsFull(id, arr) {
    const character = await Character.findByPk(id, {raw: true})
    const playerClassId = await Classes.findOne({where: {character_id: character.id}, raw: true})
    const playerClass = await PlayerClass.findOne({where: {id: playerClassId.player_class_id}, raw: true})
    // LEVEL!
    const level = await LEVELS.findAll({where: {exp: {[Op.gt]: Number(character.exp)}}, raw: true})
    const currentLevel = level[0].value - 1

    const playerStats = await CurrentCondition.findOne({
        where: {class_id: playerClass.id, lvl_id: Number(currentLevel)},
        raw: true
    })
    const currentStatsRaw = await CharacterStats.findOne({where: {id: playerStats.stats_id}, raw: true})
    console.log(currentStatsRaw);
    const totalStatsRaw = []
    for (let i = 0; i < arr.length; i += 1) {
        const item = await Items.findByPk(arr[i], {raw: true})
        totalStatsRaw.push(item)
    }
    const totalStatsGradesRaw = totalStatsRaw.map(e => e.grade_id)
    const totalStatsGrades = []
    for (let i = 0; i < totalStatsGradesRaw.length; i += 1) {
        const grade = await Grade.findByPk(totalStatsGradesRaw[i], {raw: true})
        totalStatsGrades.push(grade)
    }

    const totalStatsFromGrades = totalStatsGrades.map(e => e.stat_id)
    const totalStat = []
    for (let i = 0; i < totalStatsFromGrades.length; i += 1) {
        const stat = await Parameter.findByPk(totalStatsFromGrades[i], {raw: true})
        totalStat.push(stat)
    }
    const total_stats = {
        nickname: character.nickname,
        class: playerClass.class,
        lvl: currentLevel,
        exp: character.exp,
        avatar: playerClass.img,
        str: currentStatsRaw.str,
        agl: currentStatsRaw.agl,
        int: currentStatsRaw.int,
        def: currentStatsRaw.def,
        evs: currentStatsRaw.evs,
        dmg: currentStatsRaw.dmg,
        hp: currentStatsRaw.hp,
        mp: currentStatsRaw.mp,
        ap: currentStatsRaw.ap,
    }
    totalStat.forEach(e => {
        total_stats.str += e.str
        total_stats.agl += e.agl
        total_stats.int += e.int
        total_stats.def += e.def
        total_stats.evs += e.evs
        total_stats.dmg += e.dmg
    })
    return total_stats
}

async function getInventory(id) {
    const thing = await Inventory.findAll({where: {character_id: id}, raw: true}) // change id to req.params
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
    return result
}

module.exports = router