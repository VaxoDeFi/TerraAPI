"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _MarketController = _interopRequireDefault(require("../controllers/MarketController"));

var _TerraController = _interopRequireDefault(require("../controllers/TerraController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

/**
 * GET /api/prices
 */
router.get('/prices', _MarketController.default.getPrices);
/**
 * GET /api/price/:denom
 */

router.get('/price/:denom', _MarketController.default.getPrice);
/**
 * GET /api/tokens
 */

router.get('/tokens', _MarketController.default.getTokens);
/**
 * GET /api/pairs
 */

router.get('/pairs', _MarketController.default.getPairs);
/**
 * GET /api/coins/balance/:address
 */

router.get('/coins/balance/:address', _TerraController.default.getCoinBalance);
/**
 * GET /api/balance/:address
 */

router.get('/tokens/balance/:address', _TerraController.default.getTokenBalance);
var _default = router;
exports.default = _default;