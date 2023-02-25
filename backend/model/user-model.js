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

<<<<<<< HEAD
export default mongoose.model("user", UserModelSchema);
=======
const Users = mongoose.model("UserModel", UserModelSchema);

module.exports = Users;
>>>>>>> d09fac10f7e953abbf9ff3dbeb09e5fc8de4349b
