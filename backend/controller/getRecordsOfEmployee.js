// //import { MongoClient } from "mongodb";

// const MongoClient = require('mongodb').MongoClient;
// //Get connection URI
// const connectionString = process.env.ATLAS_URI || "";
// //Create a new MongoClient
// const client = new MongoClient(connectionString);

// // Connect to the MongoDB server
// // client.connect(function(err) {
// //   if (err) throw err;

// //   // Select the database
// //   const db = client.db("Insurance-Claim");

// //   // Select the collection
// //   const collection = db.collection("User");

// //   // Query the collection
// //   collection.find({ name: "John" }).toArray(function(err, result) {
// //     if (err) throw err;

// //     console.log(result);
// //   });
// // });

// let conn;
// try {
//   conn = client.connect();
// } catch(e) {
//   console.error(e);
// }

// let db = conn.db("User");

// console.log(db);

export const queryFromDB = (req, res)=>{
  //Take in the request (ID of employee)  
  const {id} = req.params;
  //Query the database for the relevant ID and return
  const target_ID = db.collection.find({EmployeeID: id}).toArray((err, result)=>{
    if (err) {
      console.log(err);
    }
    else {
      console.log(result);
    }
  })
  console.log(target_ID);
  res.send(target_ID);
}