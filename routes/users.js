const express = require("express")
const router = express.Router()

const usersController = require('../controllers/usersControllers')

router.post('/deleteUser', usersController.deleteUser)
router.get('/updateUser', usersController.updateUser)

module.exports = router