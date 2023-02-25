const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose
    .connect(
        "mongodb+srv://user:Testing123@cluster0.475ihrt.mongodb.net/db?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

export async function createUser(params) {
    return new UserModel(params);
}

export async function usernameInDb(username) {
    const exists = await UserModel.exists({ username: username });
    return exists;
}

export async function getUser(EmployeeID) {
    const user = await UserModel.findOne({ EmployeeID: EmployeeID });
    return user;
}
