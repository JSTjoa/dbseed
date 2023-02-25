const express = require("express");
const router = express.Router();
const claimsController = require("../controller/claims");


require("dotenv").config();

const claimController = require("../controller/claims");

// router.post("/claims",claimController.createClaim);

router
  .route("/claims")
//   .get(claimsController.)
  .post(claimsController.createClaim)
  .put(claimsController.editClaim)
//   .delete(claimsController.deleteUser);

module.exports = router;