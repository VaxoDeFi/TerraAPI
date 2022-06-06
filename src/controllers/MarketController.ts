// import tokens from '../data/whitelist.json';
import axios from 'axios';
// import pricesModel from "../models/pricesModel";
import {fetchPrices,fetchPairs} from '../services/marketService';
import getDatabase from '../db/mongo';

class MarketController {
  
  /**
   * GET /api/prices
   */
  async getPrices(req, res) {
    const db = await getDatabase();
    // const db_prices = db.collection("prices");
    // const cursor = db_prices.find();
    // const results = await cursor.toArray();
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify(results));
    return res;
  }

  /**
   * GET /api/price/:denom
   */
  async getPrice(req, res) {
    if(!req.params.denom){
      return res.status(500);
    }
    // const denom = req.params.denom;
    // const db = await getDatabase();
    // const db_prices = db.collection("prices");
    // const result = await db_prices.findOne({symbol: denom});
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify(result));
    return res;
  }

  /**
   * GET /api/tokens
   */
  async getTokens(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(tokens));
    return res;
  }

  /**
   * GET /api/pairs
   */
  async getPairs(req, res){
    const pairs = await fetchPairs();
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(pairs.data));
    return res;
  }

  /**
   * GET /api/lptokens
   */
   async getTokens(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(tokens));
    return res;
  }
}

export default new MarketController();



