"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _MarketController = _interopRequireDefault(require("../src/controllers/MarketController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/price', _MarketController["default"].getPrices);
router.get('/tokens', _MarketController["default"].getTokens);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=routes.js.map