const express = require("express")
const router = express.Router()

const usersController = require('../controllers/usersControllers')


router.post('/register', usersController.register);
router.post('/auth', usersController.auth)
router.post('/deleteUser', usersController.deleteUser)
router.get('/updateUser', usersController.updateUser)

module.exports = router