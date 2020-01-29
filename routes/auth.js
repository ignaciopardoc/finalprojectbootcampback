const express = require("express")
const router = express.Router()

const authController = require('../controllers/authControllers')


router.post('/register', authController.register);
router.post('/auth', authController.auth)

module.exports = router