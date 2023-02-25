const express = require("express");
const router = express.Router();
const User = require("../model/user-model");
const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post("/user", async (req, res) => {
    try {
        const exists = User.exists({
            EmployeeID: EmployeeID
        })
        if (exists) {
            res.status(409).send({
                message: "employee ald exists"
            })
        }
        const hashedPassword = await bcrypt.hash(req.body.Password, 10);
        const user = new User({
            EmployeeID: req.body.EmployeeID,
            Password: hashedPassword,
            //Password: req.body.Password,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Age: req.body.Age,
            Role: req.body.role
        });
        const newUser = await user.save();
        //const allUsers = await User.find({});
        res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

router.post("/user/login", async (req, res) => {
    const user = await User.findOne({
        username: req.body.EmployeeID
    });
    if (user == null) {
        return res.status(404).send({
            authenticated: false,
            token: null,
            message: "Invalid Username"
        });
    }
    try {
        if (await bcrypt.compare(req.body.Password, user.Password)) {
            const accessToken = jwt.sign(
                {
                    user: user.EmployeeID
                    //role: user.role
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: "24h" }
            );
            console.log(accessToken);
            res.status(200).json({
                authenticated: true,
                message: "Login success",
                accessToken: accessToken
            });
        } else {
            res.status(401).send({
                authenticated: false,
                message: "Login failed",
                accessToken: null
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

module.exports = router;
