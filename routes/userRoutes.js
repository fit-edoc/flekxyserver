const express = require("express");
const { registerController, loginController } = require("../controller/userController");


router = express.Router()



router.post('/register',registerController)
router.post('/login',loginController)
router.get("/products",)


module.exports = router