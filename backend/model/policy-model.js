const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PolicyModelSchema = new Schema({
    InsuranceID: {
        type: Number,
        unique: true,
        required: true
    },
    EmployeeID: {
        type: Number,
        unique: true,
        required: true
    },
    PolicyStartDate: {
        type: Date,
        required: true
    },
    PolicyTerm: {
        type: Date,
        required: true
    },
    PolicyEndDate: {
        type: Date
    },
    ClaimLimit: {
        type: Number
    },
    RemainingClaimLimit: {
        type: Number
    }
});

module.exports = mongoose.model("insurancepolicy", PolicyModelSchema);
