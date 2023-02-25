const express = require("express");
const router = express.Router();
const usersController = require("../controller/user");

router.post("/createUser", usersController.createNewUser)
router.post("/logOut", usersController.logOutUser)

module.exports = router;
