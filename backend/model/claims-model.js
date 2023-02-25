const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ClaimModelSchema = new Schema({
    
    ClaimID: {
        type: Number,
        required: true
    },
    InsuranceID: {
        type: Number,
        required: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    ExpenseDate: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    Purpose: {
        type: String,
        required: true
    },
    FollowUp: {
        type: Number,
        required: true
    },
    PreviousClaimID: {
        type: Number,
    },
    Status: {
        type: String,
        required: true
    },
    LastEditedClaimDate:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('insuranceclaims', ClaimModelSchema);

