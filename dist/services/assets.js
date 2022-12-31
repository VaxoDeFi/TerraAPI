// // import tokens from '../data/whitelist.json';
import axios from "axios";
import { createOrUpdate } from "../db/pg/coins";
export async function updateAssets(data) {
  console.log(data);
  const newData = data.map(v => {
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

export async function getAssets() {
  const assets = await axios.get(`https://api.coincap.io/v2/assets`);
  return assets;
}
/**
 * Get pairs from API.
 *
 */

export async function getAsset(id) {
  const req = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
  console.log(req);
  const candle = await axios.get(`https://api.coincap.io/v2/candles?exchange=binance&interval=m30&baseId=${id}&quoteId=tether`);
  console.log(candle);
  const asset = req.data.data;
  asset["candle_m30"] = candle.data.data;
  asset["icon"] = "";
  return asset;
}