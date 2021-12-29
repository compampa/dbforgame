const router = require('express').Router();
const {Character} = require('../db/models')

router.get('/', async (req, res) => {
        res.json({message: 'OK'})
    }
);
router.get('/get-user', async (req, res) => {
    const user = await Character.findAll()
    res.json(user)
})

module.exports = router