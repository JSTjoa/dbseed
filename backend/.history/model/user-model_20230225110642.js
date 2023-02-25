import mongoose from 'mongoose';

var Schema = mongoose.Schema
let userModelSchema = new Schema({
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
        type: String
    },
    LastName: {
        type: String
    },
    Age: {
        type: Number
    },
    Role: {
        type: Array
    }
})

export default mongoose.model('UserModel', UserModelSchema)
