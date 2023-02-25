const mongoose = require("mongoose");

var Schema = mongoose.Schema;
let UserModelSchema = new Schema({
    EmployeeID: {
        type: Number,
        unique: true,
        required: true
    },
    Password: {
        type: String,
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
    Age: {
        type: Number,
        required: true
    },
    Role: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('User', UserModelSchema)
