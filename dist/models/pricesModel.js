"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  Schema
} = _mongoose.default;
const PricesSchema = Schema({
  symbol: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  pct_change_1h: {
    type: Number,
    required: true
  },
  pct_change_24h: {
    type: Number,
    required: true
  },
  pct_change_7d: {
    type: Number,
    required: true
  },
  market_cap: {
    type: Number,
    required: true
  },
  protocol: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: false
  },
  icon: {
    type: String,
    required: false
  }
});

const PriceModel = _mongoose.default.model("Prices", PricesSchema);

var _default = PriceModel;
exports.default = _default;