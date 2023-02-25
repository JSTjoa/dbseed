const express = require("express");
const router = express.Router();
const claimsController = require("../controller/claims");


require("dotenv").config();

const claimController = require("../controller/claims");

router.post("/claims",claimController.createClaim);

router
  .route("/")
//   .get(claimsController.)
  .post(claimsController.createClaim)
//   .patch(claimsController.updateUser)
//   .delete(claimsController.deleteUser);

module.exports = router;