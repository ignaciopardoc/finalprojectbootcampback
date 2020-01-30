const express = require("express")
const router = express.Router()

const businessController = require('../controllers/businessControllers.js')

router.post('/delete', businessController.delete)
router.get('/update', businessController.update)
router.post('/insertBusiness', businessController.insertBusiness)
router.get("/getInfoUserBusiness", businessController.getBusinessFromUser)

router.get('/getOneBusiness/:id', businessController.getOneInfo)

router.get('/getCategories', businessController.getCategories)


module.exports = router