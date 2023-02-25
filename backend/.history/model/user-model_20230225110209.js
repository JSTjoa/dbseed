import mongoose from 'mongoose';

var Schema = mongoose.Schema
let userModelSchema = new Schema({
    EmployeeID: {
        type: Number,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})