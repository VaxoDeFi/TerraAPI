import express from "express";
var server = express.Router();
import { getAssets, getAsset } from "../services/queries";
server.get("/prices", async (req, res) => {
  try {
    const assets = await getAssets();
    res.status(200).send(assets.data);
  } catch (e) {
    res.status(500).end("[API:PRICES] Couldn't fetch prices assets | " + e);
  }
});
server.get("/price/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const assets = await getAsset(id);
    res.status(200).send(assets);
  } catch (e) {
    res.status(500).end("[API:PRICE] Couldn't fetch price asset | " + e);
  }
});
export default server;