import express from 'express';
var router = express.Router();
import MarketController from '../controllers/MarketController';

router.get('/price', MarketController.getPrices)
router.get('/tokens', MarketController.getTokens)

export default router;

