"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoin = getCoin;
exports.insertCoin = insertCoin;

var _mongo = require("./mongo");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var collectionName = "coins";

function insertCoin(_x) {
  return _insertCoin.apply(this, arguments);
}

function _insertCoin() {
  _insertCoin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ad) {
    var database, _yield$database$colle, insertedId;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _mongo.getDatabase)();

          case 2:
            database = _context.sent;
            _context.next = 5;
            return database.collection(collectionName).insertOne(ad);

          case 5:
            _yield$database$colle = _context.sent;
            insertedId = _yield$database$colle.insertedId;
            return _context.abrupt("return", insertedId);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _insertCoin.apply(this, arguments);
}

function getCoin() {
  return _getCoin.apply(this, arguments);
} // module.exports = {
//   insertCoin,
//   getCoin,
// };


function _getCoin() {
  _getCoin = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var database;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _mongo.getDatabase)();

          case 2:
            database = _context2.sent;
            _context2.next = 5;
            return database.collection(collectionName).find({}).toArray();

          case 5:
            return _context2.abrupt("return", _context2.sent);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getCoin.apply(this, arguments);
}
//# sourceMappingURL=ads.js.map