import env from "@env";
import Mongoose from "mongoose";

export default async function getDatabase() {
  // Mongoose.connect(
  //   `mongodb+srv://${env.MONGODB_USER}:${env.MONGODB_PWD}@${env.MONGODB_CLUSTER}.mongodb.net/${env.MONGODB_DB}?retryWrites=true&w=majority`, 
  //   {
  //     useNewUrlParser: true
  //   }
  // );
  
  const db = Mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });

  return db;
}


