const router = require('express').Router();


router.get('/', async (req, res) => {
        res.json({message: 'OK'})
    }
);
module.exports = router