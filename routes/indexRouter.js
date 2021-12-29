const router = require('express').Router();
const {Character} = require('../db/models')

router.get('/', async (req, res) => {
        res.json({message: 'OK'})
    }
);
router.get('/get-user',
    async (req, res) => {
        const user = await Character.findOne({where: {id: 1}})
        res.json(user)
    })

module.exports = router