const Claims = require("../model/claims-model");
const express = require("express");
const mongoose = require("mongoose");
const {getPolicy,editPolicyLimit }= require("../controller/policy.js");
const Policy = require("../model/policy-model");
let currentID = 15;

const createClaim =  async (req, res) => {
    // Prevent duplicate submissions
    if (await Claims.findOne({ClaimID : currentID})){
        res.status(500).send("claim already exists!");
    }
    // query insurance policies by InsuranceID to make sure that client has existing insurance
    const policy = await Policy.findOne({InsuranceID : req.body.InsuranceID})
    if (!policy){
        res.status(500).send("you do not have an existing insurance policy!");
    }
    // make sure that the claim amount does not exceed remaining claim limit
    const PolicyBalance = await Policy.findOne({InsuranceID : req.body.InsuranceID});
    if (PolicyBalance.RemainingClaimLimit < req.body.deductAmount) {
        req.body.status = "Rejected";
    }else{
        Policy.findOneAndUpdate({ InsuranceID : req.body.InsuranceID }, 
                {$inc: { RemainingClaimLimit: -req.body.Amount }}).then(console.log("minus"));
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
            LastEditedClaimDate : req.body.LastEditedClaimDate,
            EmployeeID: req.body.EmployeeID
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

const getClaim = async (req, res)=>{
    try{
        //Take in the request (ID of employee)  
        const {id} = req.params;
        //Query the database for the relevant ID and return
        const target_ID = await Claims.findOne({EmployeeID: id});
        res.send(target_ID);
    }
    catch(err) {
        console.log(err);
    }
}
module.exports = {    createClaim,
    getClaim
  };



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
    editClaim,
    getClaim
  };
