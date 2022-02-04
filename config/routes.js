import express from 'express';
var router = express.Router();
import MarketController from '../src/controllers/MarketController';

router.get('/price', MarketController.getPrices)
router.get('/tokens', MarketController.getTokens)

export default router;

