import mongoose from 'mongoose';

var Schema = mongoose.Schema
let ClaimModelSchema = new Schema({
    
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
        type: Boolean,
        required: true
    },
    PreviousClaimID: {
        type: Number,
        required: true
    },
    Status: {
        type: Boolean,
        required: true
    },
    LastEditedClaimDate:{
        type: String,
        required: true
    }

})

export default mongoose.model('ClaimsModel', ClaimModelSchema)
