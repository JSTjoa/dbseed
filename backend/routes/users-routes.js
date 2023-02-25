const express = require("express");
const router = express.Router();
const usersController = require("../controller/user");

router.post('/createUser', usersController.createNewUser)
router.post('/login', usersController.logInUser);

module.exports = router;
