import express from 'express';
import BasicController from "./controllers/BasicController";
var Router = express.Router();

/**
 * GET /api/prices
 */
Router.get('/', BasicController.getHome); // /**
//  * GET /api/price/:denom
//  */
//  Router.get('/price/:denom', MarketController.getPrice)
// /**
//  * GET /api/tokens
//  */
//  Router.get('/tokens', MarketController.getTokens)
// /**
//  * GET /api/pairs
//  */
//  Router.get('/pairs', MarketController.getPairs)
// /**
//  * GET /api/coins/balance/:address
//  */
//  Router.get('/coins/balance/:address', TerraController.getCoinBalance)
// /**
//  * GET /api/balance/:address
//  */
//  Router.get('/tokens/balance/:address', TerraController.getTokenBalance)

export default Router;