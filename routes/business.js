const express = require("express")
const router = express.Router()

const businessController = require('../controllers/businessControllers.js')

router.post('/delete', businessController.delete)
router.get('/update', businessController.update)

router.get('/:id', businessController.getOneInfo)


module.exports = router