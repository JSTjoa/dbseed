const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.set("strictQuery", false);
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

const corsConfig = {
    credentials: true,
    origin: true
};

const userRouter = require("./routes/users");
app.use("/api", userRouter);
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.use(cors(corsConfig)) // config cors so that front-end can use
// app.options('*', cors())

const User = require("./model/user-model");

app.get("/getUser", async (req, res) => {
    const getuser = await User.find();
    res.json(getuser);
});

app.listen(8000, () => console.log("services listening on port 8000"));

module.exports = app;