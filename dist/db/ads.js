"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoin = getCoin;
exports.insertCoin = insertCoin;

var _mongo = require("./mongo");

const collectionName = "coins";

async function insertCoin(ad) {
  const database = await (0, _mongo.getDatabase)();
  const {
    insertedId
  } = await database.collection(collectionName).insertOne(ad);
  return insertedId;
}

async function getCoin() {
  const database = await (0, _mongo.getDatabase)();
  return await database.collection(collectionName).find({}).toArray();
}