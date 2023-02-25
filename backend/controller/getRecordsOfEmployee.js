import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("User");

export default db;

console.log(db);

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
  
}