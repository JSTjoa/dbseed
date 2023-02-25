const Policy = require("../model/policy-model");
const express = require("express");
const mongoose = require("mongoose");


const getPolicy = async (req,res) => {
    const { id } = req.params;
    const policy = await Policy.findOne({InsuranceID : id})
    if (policy) {
        res.send(true);
    } else {
        res.send(false);
    }
};


const editPolicyLimit = async (req,res) => {
    try {
        const PolicyBalance = await Policy.findOne({InsuranceID : req.body.InsuranceID});
        if (PolicyBalance.RemainingClaimLimit >= req.body.deductAmount) {
            Policy.findOneAndUpdate({ InsuranceID : req.body.InsuranceID }, 
                {$inc: { RemainingClaimLimit: -req.body.deductAmount }})
                .then(res.status(200).json({
                message: "Claim Update Successful"
                }))}
        else {
            res.status(500).send('not enough claim limit');
        }
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
}


module.exports = {
    editPolicyLimit,
    getPolicy
  };
