const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'dbsseed',
  password: 'table19',
  database: 'insurancedata'
})

connection.connect()

connection.query('SELECT * from insuranceclaims where claimId = 2010;', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows)
})

connection.end()

// mongoose.set("strictQuery", false);
// mongoose
//     .connect(
//         "mongodb+srv://user:Testing123@cluster0.475ihrt.mongodb.net/db?retryWrites=true&w=majority",
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         }
//     )
//     .then(() => console.log("Connected to DB"))
//     .catch(console.error);

// const corsConfig = {
//     credentials: true,
//     origin: true
// };

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())
// app.use(cors(corsConfig)) // config cors so that front-end can use
// app.options('*', cors())

// const Users = require("./model/user-model");

// app.get("/getUsers", async (req, res) => {
//     const getusers = await User.find();
//     res.json(getusers);
// });
//router.post('/login', loginUser)
//router.post('/logout', logoutUser)

app.listen(8000, () => console.log("services listening on port 8000"));
