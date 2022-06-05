"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _whitelist = _interopRequireDefault(require("../data/whitelist.json"));

var _axios = _interopRequireDefault(require("axios"));

var _pricesModel = _interopRequireDefault(require("../models/pricesModel"));

var _marketService = require("../services/marketService");

var _mongo = _interopRequireDefault(require("../db/mongo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MarketController {
  /**
   * GET /api/prices
   */
  async getPrices(req, res) {
    const db = await (0, _mongo.default)();
    const db_prices = db.collection("prices");
    const cursor = db_prices.find();
    const results = await cursor.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(results));
    return res;
  }
  /**
   * GET /api/price/:denom
   */


  async getPrice(req, res) {
    if (!req.params.denom) {
      return res.status(500);
    }

    const denom = req.params.denom;
    const db = await (0, _mongo.default)();
    const db_prices = db.collection("prices");
    const result = await db_prices.findOne({
      symbol: denom
    });
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result));
    return res;
  }
  /**
   * GET /api/tokens
   */


  async getTokens(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_whitelist.default));
    return res;
  }
  /**
   * GET /api/pairs
   */


  async getPairs(req, res) {
    const pairs = await (0, _marketService.fetchPairs)();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(pairs.data));
    return res;
  }
  /**
   * GET /api/lptokens
   */


  async getTokens(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_whitelist.default));
    return res;
  }

}

var _default = new MarketController();

exports.default = _default;