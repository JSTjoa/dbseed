const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router
  .route("/user") // matches /users
  .post(usersController.createNewUser)
  .delete(usersController.logOutUser);

module.exports = router;
