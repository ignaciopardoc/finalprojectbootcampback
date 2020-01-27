const express = require("express")
const router = express.Router()

const usersController = require('../controllers/usersControllers')


router.post('/register', usersController.register);
router.get('/auth', usersController.auth)
router.post('/deleteUser', usersController.deleteUser)

module.exports = router