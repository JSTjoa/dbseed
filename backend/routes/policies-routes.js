const express = require("express");
const router = express.Router();
const policiesController = require("../controller/policy");

router.get('/getPolicy/:id', policiesController.getPolicy)
router.put('/claimValidation', policiesController.editPolicyLimit)

module.exports = router;