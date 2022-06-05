import express from 'express';
var router = express.Router();
import MarketController from '../controllers/MarketController';
import TerraController from '../controllers/TerraController';

/**
 * GET /api/prices
 */
router.get('/prices', MarketController.getPrices)

/**
 * GET /api/price/:denom
 */
router.get('/price/:denom', MarketController.getPrice)

/**
 * GET /api/tokens
 */
router.get('/tokens', MarketController.getTokens)

/**
 * GET /api/pairs
 */
 router.get('/pairs', MarketController.getPairs)

/**
 * GET /api/coins/balance/:address
 */
router.get('/coins/balance/:address', TerraController.getCoinBalance)

/**
 * GET /api/balance/:address
 */
 router.get('/tokens/balance/:address', TerraController.getTokenBalance)

export default router;

