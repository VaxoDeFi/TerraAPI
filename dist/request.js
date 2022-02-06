"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrices = getPrices;
exports.url = exports.key = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = "https://pro-api.coinmarketcap.com/v1/";
exports.url = url;
var key = {
  params: {
    CMC_PRO_API_KEY: process.env.CMC_KEY
  }
};
exports.key = key;

function getPrices() {
  return _axios["default"].get(url + "cryptocurrency/listings/latest", key).then(function (response) {
    return response.data;
  });
}
//# sourceMappingURL=request.js.map