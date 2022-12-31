import express from "express";
var server = express.Router();
import { getAssets, getAsset } from "../services/assets";

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
    const assets = await getBalance(address);
    res.status(200).send(assets);
  } catch (e) {
    res.status(500).end("[API:PRICE] Couldn't fetch price asset | " + e);
  }
});

export default server;
