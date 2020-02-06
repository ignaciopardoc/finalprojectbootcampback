

const express = require("express")
const router = express.Router()

const dogControllers = require('../controllers/dogControllers.js')

const multer = require('multer')

const storage = multer.diskStorage({
    destination: "public/dogPhoto",
    filename: (_req, file, cb) => {
      const extension = file.originalname.slice(
        file.originalname.lastIndexOf(".")
      );
      cb(null, new Date().valueOf() + extension);
    }
  });
  const dogPhoto = multer({
    storage
  }).single("avatar");

router.post("/insertDog", dogControllers.insertDog)
router.post("/setMainPhoto/:dog_id", dogPhoto, dogControllers.setMainPhoto)
router.get("/getDogInfo", dogControllers.getDogInfo)
router.post("/updateDog/:dog_id", dogControllers.updateDog )
router.get("/getDogInfo/:dog_id", dogControllers.getOneDogInfo)

module.exports = router