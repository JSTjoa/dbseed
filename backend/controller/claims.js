const Claims = require("../model/claims-model");
const { default: mongoose } = require("mongoose");

let currentID = 0;
const createClaim =  async (req, res) => {
    try {
        const claim = new Claims({
            ClaimID : currentID,
            InsuranceID : req.body.InsuranceID,
            FirstName : req.body.FirstName,
            LastName : req.body.LastName,
            ExpenseDate : req.body.ExpenseDate,
            Amount : req.body.Amount,
            Purpose : req.body.Purpose,
            FollowUp : req.body.FollowUp,
            PreviousClaimID : req.body.PreviousClaimID,
            Status : req.body.Status,
            LastEditedClaimDate : req.body.LastEditedClaimDate
        });

        const newClaim = await claim.save();
        //const allUsers = await User.find({});
        res.status(201).json(newClaim);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

module.exports = {
    createClaim
  };
