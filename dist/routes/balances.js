import express from "express";
var server = express.Router();
import { getAssets, getTokenBalances } from "../services/assets";
server.get("/total", async (req, res) => {
  try {
    const assets = await getAssets();
    res.status(200).send(assets.data);
  } catch (e) {
    res.status(500).end("[API:PRICES] Couldn't fetch prices assets | " + e);
  }
});
server.get("/:address", async (req, res) => {
  try {
    const address = req.params.address;
    console.log(address);
    const assets = await getTokenBalances(address);
    res.status(200).send(assets);
  } catch (e) {
    res.status(500).end("[API:BALANCE] Couldn't get balance tokens | " + e);
  }
});
export default server;