import express from "express";
var Router = express.Router();
import Prices from "./routes/prices";
import Resources from "./routes/resources";
import Balances from "./routes/balances";
/**
 * GET /
 */

Router.use("/", Prices);
/**
 * GET /res/
 */

Router.use("/balances", Balances);
/**
 * GET /res/
 */

Router.use("/res", Resources);
export default Router;