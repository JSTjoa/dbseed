const express = require("express");
const router = express.Router();
const usersController = require("../controller/user");

router.post('/create', usersController.createNewUser)
router.post('/login', usersController.logOutUser);

module.exports = router;
