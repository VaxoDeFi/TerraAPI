"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _whitelist = _interopRequireDefault(require("../data/whitelist.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MarketController {
  /**
   * GET /api/coins/balance/:address
   */
  async getTokenBalance(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_whitelist.default));
    return res;
  }
  /**
   * GET /api/balance/:address
   */


  async getCoinBalance(req, res) {
    if (!req.params.address) {
      return res.status(500);
    }

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(_whitelist.default));
    return res;
  }

}

var _default = new MarketController();

exports.default = _default;