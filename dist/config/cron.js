"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodeCron = _interopRequireDefault(require("node-cron"));

var _marketService = _interopRequireDefault(require("../services/marketService"));

var _mongo = _interopRequireDefault(require("../db/mongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Update prices documents in MongoDB 
 * 
 */
_nodeCron.default.schedule("1 * * * * *", async () => {
  const priceList = await (0, _marketService.default)();
  const db = await (0, _mongo.default)();
  const db_prices = db.collection("prices");
  db_prices.deleteMany();
  const options = {
    ordered: true
  };
  const result = await db_prices.insertMany(priceList, options);
  console.log(`${result.insertedCount} documents were inserted`);
});

var _default = _nodeCron.default;
exports.default = _default;