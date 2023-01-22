import express from "express";
var server = express.Router();
import { getTokenBalances, getAsset } from "../services/assets";

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
