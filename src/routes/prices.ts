import express from "express";
var server = express.Router();
import { getApiCoinAssets, getApiMessari, getAsset } from "../services/assets";
import vaxoResponses from "../utilities/vaxoResponses";
import type { Request, Response } from "express";

server.get("/apicoin/prices", async (req: Request, res: Response) => {
  try {
    const assets = await getApiCoinAssets();
    vaxoResponses.json(req, res, assets);
  } catch (e) {
    res.status(500).end("[API:PRICES] Couldn't fetch prices assets | " + e);
  }
});

server.get("/messari/prices", async (req: Request, res: Response) => {
  try {
    const assets = await getApiMessari();
    vaxoResponses.json(req, res, assets.data);
  } catch (e) {
    res.status(500).end("[API:PRICES] Couldn't fetch prices assets | " + e);
  }
});

server.get("/price/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const assets = await getAsset(id);
    res.status(200).send(assets);
  } catch (e) {
    res.status(500).end("[API:PRICE] Couldn't fetch price asset | " + e);
  }
});

server.get("/dex/prices", async (req: Request, res: Response) => {
  try {
    const assets = await getApiCoinAssets();
    res.status(200).send(assets.data);
  } catch (e) {
    res.status(500).end("[API:PRICES] Couldn't fetch prices assets | " + e);
  }
});

server.get("/dex/price/:id", async (req: Request, res: Response) => {
  try {
    const assets = await getApiCoinAssets();
    res.status(200).send(assets.data);
  } catch (e) {
    res.status(500).end("[API:PRICES] Couldn't fetch prices assets | " + e);
  }
});

export default server;
