const express = require("express");
const router = express.Router();
const usersController = require("../controller/user");

router
    .route("/user") // matches /users
    .post("/", usersController.createNewUser)
    .post("/login", usersController.logOutUser);

module.exports = router;
