import express from "express";
var server = express.Router();
import vaxoResponses from "../utilities/vaxoResponses";
import { getTokenBalances, getAsset, getBalance } from "../services/assets";
import type { Request, Response } from "express";
import axios from "axios";

server.get("/tokens/:address", async (req: Request, res: Response) => {
  try {
    const address = req.params.address;
    const assets = await getTokenBalances(address);
    vaxoResponses.json(req, res, assets);
  } catch (e) {
    res.status(500).end("[API:BALANCE] Couldn't get balance tokens" + e);
  }
});

server.get("/:address", async (req: Request, res: Response) => {
  try {
    const address = req.params.address;
    const balance = await getBalance(address);
    const eth_price = await axios.get(
      "https://api.poloniex.com/markets/ETH_USDT/price"
    );
    const price = Number(eth_price.data.price) * Number(balance);
    var prices = {
      amount: balance,
      usdt_amount: price.toFixed(2),
      eth_usdt: eth_price.data.price,
      eth_daily: eth_price.data.dailyChange,
    };
    vaxoResponses.json(req, res, prices);
  } catch (e) {
    res.status(500).end("[API:BALANCE] Couldn't get balance tokens" + e);
  }
});

export default server;
