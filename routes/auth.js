const express = require("express")
const router = express.Router()
const multer = require("multer")

const authController = require('../controllers/authControllers')

const storage = multer.diskStorage({
    destination: "public/userAvatar",
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

router.post('/register', authController.register);
router.post('/auth', authController.auth)
router.get('/getInfoUser', authController.getInfoUser)
router.post('/uploadAvatar/:userId', uploadAvatar, authController.uploadAvatar)
router.post('/updatePassword', authController.updatePassword)
router.post("/addPersonalInformation", authController.addPersonalInformation)

module.exports = router