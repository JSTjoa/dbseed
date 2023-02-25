const express = require("express");
const router = express.Router();
const claimsController = require("../controller/claims");


require("dotenv").config();

const claimController = require("../controller/claims");

router.post("/claims",claimController.createClaim);
router.get("/claims/:id",claimController.getClaim);
router.put("/claimsEdit",claimController.editClaim);
router.delete("/claimsDelete",claimController.deleteClaim);


// router
//   .route("/claims")
// //   .get(claimsController.)
//   .post(claimsController.createClaim)
//   .put(claimsController.editClaim)
// //   .delete(claimsController.deleteUser);

module.exports = router;