// // import tokens from '../data/whitelist.json';
import env from "@env";
import axios from "axios";
import { createOrUpdate } from "../db/pg/coins";
import { Alchemy, Network } from "alchemy-sdk";

export async function updateAssets(data: CoinDB[]) {
  console.log(data);
  const newData = data.map((v: any) => {
    v.idRank = v.id;
    v.icon = "";
    delete v.id;
    return v;
  });
  await createOrUpdate(newData);
}

/**
 * Get all prices.
 *
 */
export async function getBalance(address: string) {
  const assets = await axios.get(`https://api.coincap.io/v2/assets`);
  return assets;
}

/**
 * Get all prices.
 *
 */
export async function getAssets() {
  const assets = await axios.get(`https://api.coincap.io/v2/assets`);
  return assets;
}

/**
 * Get pairs from API.
 *
 */
export async function getAsset(id: string) {
  const req = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
  console.log(req);
  const candle = await axios.get(
    `https://api.coincap.io/v2/candles?exchange=binance&interval=m30&baseId=${id}&quoteId=tether`
  );
  console.log(candle);
  const asset = req.data.data;
  asset["candle_m30"] = candle.data.data;
  asset["icon"] = "";
  return asset;
}
