"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDatabase;

var _mongodb = _interopRequireDefault(require("mongodb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var database = null;
var mongoDBURL = "mongodb://127.0.0.1:27017/";

function startDatabase() {
  return _startDatabase.apply(this, arguments);
}

function _startDatabase() {
  _startDatabase = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var connection;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _mongodb["default"].connect(mongoDBURL, {
              useNewUrlParser: true
            });

          case 2:
            connection = _context.sent;
            database = connection.db();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _startDatabase.apply(this, arguments);
}

function getDatabase() {
  return _getDatabase.apply(this, arguments);
}

function _getDatabase() {
  _getDatabase = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (database) {
              _context2.next = 3;
              break;
            }

            _context2.next = 3;
            return startDatabase();

          case 3:
            return _context2.abrupt("return", database);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getDatabase.apply(this, arguments);
}
//# sourceMappingURL=mongo.js.map