import express from "express";
var server = express.Router();
import vaxoResponses from "../utilities/vaxoResponses";
import { getTokenBalances, getAsset } from "../services/assets";
import type { Request, Response } from "express";

server.get("/:address", async (req: Request, res: Response) => {
  try {
    const address = req.params.address;
    const assets = await getTokenBalances(address);
    vaxoResponses.json(req, res, assets);
  } catch (e) {
    res.status(500).end("[API:BALANCE] Couldn't get balance tokens | " + e);
  }
});

export default server;
