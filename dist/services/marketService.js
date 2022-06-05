"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchPairs = fetchPairs;
exports.fetchPriceByDenom = fetchPriceByDenom;
exports.fetchPrices = fetchPrices;
exports.fetchTokenBalance = fetchTokenBalance;

var _whitelist = _interopRequireDefault(require("../data/whitelist.json"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get all prices.
 *
 * @returns {Promise}
 */
async function fetchPrices() {
  const prices = await _axios.default.get('https://api.extraterrestrial.money/v1/api/prices');
  const data = prices.data.prices;
  let priceList = [];
  Object.keys(prices.data.prices).forEach(function (key) {
    if (_whitelist.default[key]) {
      let obj = data[key];
      obj.protocol = _whitelist.default[key].protocol;
      obj.symbol = _whitelist.default[key].symbol;
      obj.token = _whitelist.default[key].token;
      obj.icon = _whitelist.default[key].icon;
      priceList.push(obj);
    }
  });
  return Promise.resolve(priceList);
}
/**
 * Get pairs from API.
 *
 * @returns {Promise}
 */


async function fetchPairs(denom) {
  const pairs = await _axios.default.get('https://api.terraswap.io/dashboard/pairs');
  return Promise.resolve(pairs);
}
/**
 * Get the price by denom.
 *
 * @returns {Array}
 */


async function fetchPriceByDenom(denom) {
  let prices = await _axios.default.get('https://api.extraterrestrial.money/v1/api/prices');
  const data = prices.data.prices;
  let price = [];
  Object.keys(data).forEach(function (key) {
    if (denom === key) {
      let obj = data[key];
      obj.protocol = _whitelist.default[key].protocol;
      obj.symbol = _whitelist.default[key].symbol;
      obj.token = _whitelist.default[key].token;
      obj.icon = _whitelist.default[key].icon;
      price.push(obj);
    }
  });
  return price;
}
/**
 * Get token balance of user.
 *
 * @returns {Promise}
 */


function fetchTokenBalance(list) {
  return;
}