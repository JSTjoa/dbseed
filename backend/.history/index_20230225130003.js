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

app.get("/getUsers", async (req, res) => {
    const getusers = await User.find();
    res.json(getusers);
});

app.listen(8000, () => console.log("services listening on port 8000"));

module.exports(app);