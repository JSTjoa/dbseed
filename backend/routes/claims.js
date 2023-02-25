const express = require("express");
const router = express.Router();
const claimsController = require("../controller/claims");


require("dotenv").config();

const claimController = require("../controller/claims");

// router.post("/claims",claimController.createClaim);
router.get("/claims/:id",claimController.getClaim);

// router
  // .route("/claims")
  // .get(claimsController.getClaim)
  // .post(claimsController.createClaim)
//   .patch(claimsController.updateUser)
//   .delete(claimsController.deleteUser);

module.exports = router;