const express = require("express")
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: "public/avatar",
    filename: (_req, file, cb) => {
      const extension = file.originalname.slice(
        file.originalname.lastIndexOf(".")
      );
      cb(null, new Date().valueOf() + extension);
    }
  });
  const uploadAvatar = multer({
    storage
  }).single("avatar");
  




const businessController = require('../controllers/businessControllers.js')

// router.post('/delete', businessController.delete)
router.get('/update', businessController.update)
router.post('/insertBusiness', businessController.insertBusiness)
router.get("/getInfoUserBusiness", businessController.getBusinessFromUser)

router.get('/getOneBusiness/:id', businessController.getOneInfo)
router.get('/deleteBusiness/:businessId', businessController.deleteBusiness)
router.post('/updateBusiness/', businessController.updateBusiness)

router.get('/getCategories', businessController.getCategories)

router.post('/setMainPhoto/:business_id', uploadAvatar,  businessController.setMainPhoto)

router.post('/getBusinessMap', businessController.getBusinessMap)


module.exports = router