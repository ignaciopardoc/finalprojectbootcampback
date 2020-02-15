const express = require("express")
const router = express.Router()

const reviewController = require('../controllers/reviewController')

router.post('/setReview', reviewController.setReview)
router.post('/getReviewNumber', reviewController.getReviewNumber)
router.get('/getReviews/:businessId', reviewController.getReviews)


module.exports = router