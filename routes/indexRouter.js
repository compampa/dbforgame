const router = require('express').Router();
const {Character, Class, User} = require('../db/models')

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

module.exports = router