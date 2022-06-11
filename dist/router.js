import express from "express";
var Router = express.Router();
import Prices from "./routes/prices";
/**
 * GET /api/prices
 */

Router.use("/", Prices); // /**
//  * GET /api/price/:denom
//  */
//  Router.get('/price/:denom', MarketController.getPrice)

export default Router;