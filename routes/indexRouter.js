const router = require('express').Router();


router.get('/', async (req, res) => {
    res.send('OK')
    }
);
module.exports = router