const express = require("express")
const router = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
    destination: "public/avataaa",
    filename: (_req, file, cb) => {
      const extension = file.originalname.slice(
        file.originalname.lastIndexOf(".")
      );
      cb(null, new Date().valueOf() + extension);
    }
  });
  const uploadAvatar = multer({
    storage
  });
  




const businessController = require('../controllers/businessControllers.js')

router.post('/delete', businessController.delete)
router.get('/update', businessController.update)
router.post('/insertBusiness', businessController.insertBusiness)
router.get("/getInfoUserBusiness", businessController.getBusinessFromUser)

router.get('/getOneBusiness/:id', businessController.getOneInfo)

router.get('/getCategories', businessController.getCategories)

// router.post('/caca',uploadAvatar.single("avatar"),  businessController.setMainPhoto)
router.post('/caca',uploadAvatar.single("avatar"),  (req,res)=>{
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    console.log(req.body)
    console.log(req.file.originalname)

    // res.send(json)

})


module.exports = router