"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDatabase;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function getDatabase() {
  _mongoose.default.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
  });

  const db = _mongoose.default.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
  return db;
}