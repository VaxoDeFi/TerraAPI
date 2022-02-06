"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
server.use(_express["default"].json());
server.use(_express["default"].urlencoded({
  extended: true
}));
server.use((0, _cors["default"])());
server.use((0, _helmet["default"])());
server.use((0, _morgan["default"])("combined"));
server.use(_routes["default"]);
var _default = server;
exports["default"] = _default;
//# sourceMappingURL=server.js.map