const { getDatabase } = require("./mongo");

const collectionName = "coins";

async function insertCoin(ad) {
  const database = await getDatabase();
  const { insertedId } = await database
    .collection(collectionName)
    .insertOne(ad);
  return insertedId;
}

async function getCoin() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

module.exports = {
  insertCoin,
  getCoin,
};
