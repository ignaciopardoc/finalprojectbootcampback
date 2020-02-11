const express = require("express")
const router = express.Router()

const eventController = require('../controllers/eventController')

router.post('/addEvent', eventController.addEvent)
router.get('/getEvent', eventController.getEventFromUser)
router.get('/getEventFromBusiness/:businessId', eventController.getEventFromBusiness)


module.exports = router