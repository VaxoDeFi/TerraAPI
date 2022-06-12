import express from "express";
var Router = express.Router();
import Prices from "./routes/prices";
import Resources from "./routes/resources";

/**
 * GET /
 */
Router.use("/", Prices);

/**
 * GET /res/
 */
Router.use("/res", Resources);

// /**
//  * GET /api/price/:denom
//  */
//  Router.get('/price/:denom', MarketController.getPrice)

export default Router;
