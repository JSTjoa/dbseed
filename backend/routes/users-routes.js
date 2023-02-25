const express = require("express");
const router = express.Router();
const usersController = require("../controller/user");

router
    .route("/user") // matches /users
    .post('/create', usersController.createNewUser)
    .post('/login', usersController.logOutUser);

module.exports = router;
