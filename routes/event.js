const express = require("express")
const router = express.Router()

const eventController = require('../controllers/eventController')

router.post('/addEvent', eventController.addEvent)
router.get('/getEvent', eventController.getEventFromUser)
router.get('/getEventFromBusiness/:businessId', eventController.getEventFromBusiness)
router.get('/getEventInfo/:eventId', eventController.getEventInfo)
router.post('/updateEvent/', eventController.updateEvent)
router.post('/deleteEvent/', eventController.deleteEvent)
router.get('/getFutureEvents/', eventController.getFutureEvents)

module.exports = router