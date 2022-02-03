const { MongoClient } = require("mongodb");

let database = null;
const mongoDBURL = "mongodb://127.0.0.1:27017/";

async function startDatabase() {
  const connection = await MongoClient.connect(mongoDBURL, {
    useNewUrlParser: true,
  });
  database = connection.db();
}

async function getDatabase() {
  if (!database) await startDatabase();
  return database;
}

module.exports = {
  getDatabase,
  startDatabase,
};
