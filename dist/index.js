"use strict";

var _server = _interopRequireDefault(require("./config/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var port = 4000; // require("dotenv").config();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());
// app.use(helmet());
// app.use(morgan("combined"));
// server.use(require('./routes'));
// console.log(mongo.getDatabase());
// coins.insertCoin()
// cron.schedule("1 * * * * *", async () => {
//   console.log("running a task every minute");
//   const list = await getListCoins();
//   console.log(list);
// });

_server["default"].listen(port, function () {
  console.log("API Pond at http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map