const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router
  .route("/") // matches /users
  .get(usersController.getAllUsers)
  .post(usersController.createNewUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = router;
