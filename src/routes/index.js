const indexController = require('../controllers/indexController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = require('express').Router()

router.post('/registration', indexController.registration)
router.post('/login', indexController.login)
router.post('/logout', indexController.logout)

router.get('/refresh', indexController.refresh)

module.exports = router
