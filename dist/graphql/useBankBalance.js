"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _client = require("@apollo/client");

const QUERY = (0, _client.gql)`
  query($address: String) {
    BankBalancesAddress(Address: $address) {
      Result {
        Amount
        Denom
      }
    }
  }
`;

var _default = address => {
  const [load, result] = (0, _client.useLazyQuery)(QUERY, {
    variables: {
      address
    }
  });
  return {
    load,
    ...result
  };
};

exports.default = _default;