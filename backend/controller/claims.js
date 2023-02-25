const Claims = require("../model/claims-model");
const express = require("express");
const mongoose = require("mongoose");

let currentID = 0;
const createClaim =  async (req, res) => {
    // Prevent duplicate submissions
    if (Claims.findOne(currentID)){
        res.status(500).send("claim already exists!");
    }
    // query insurance policies by InsuranceID to make sure that client has existing insurance
    if (!true){
        res.status(500).send("you do not have an existing insurance policy!");
    }
    // make sure that the claim amount does not exceed remaining claim limit
    if (!true){
        res.status(500).send(`You only have ${1} amount left, claim fail!`);
    }
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
        currentID++;
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

const editClaim = async (req,res) => {
    try {
        Claims.findOneAndUpdate({ ClaimID : req.body.ClaimID }, {
            InsuranceID : req.body.InsuranceID,
            FirstName : req.body.FirstName,
            LastName : req.body.LastName,
            ExpenseDate : req.body.ExpenseDate,
            Amount : req.body.Amount,
            Purpose : req.body.Purpose,
            FollowUp : req.body.FollowUp,
            Status : req.body.Status,
            LastEditedClaimDate : new Date()
        }).then(res.status(200).json({
                message: "Claim Update Successful"
            }))
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}

module.exports = {
    createClaim,
    editClaim
  };
