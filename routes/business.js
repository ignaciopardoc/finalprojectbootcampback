const express = require("express")
const router = express.Router()

const businessController = require('../controllers/businessControllers.js')


router.post('/register', businessController.register);
router.post('/auth', businessController.auth)
router.post('/delete', businessController.delete)
router.get('/update', businessController.update)
// TODO get info from one business
// router.get('/:id', businessController.getOneInfo)


module.exports = router