// // import tokens from '../data/whitelist.json';
import env from "@env";
import axios from "axios";

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
  const candle = await axios.get(
    `https://api.coincap.io/v2/candles?exchange=binance&interval=m30&baseId=${id}&quoteId=tether`
  );
  const asset = req.data.data;
  asset["candle_m30"] = candle.data.data;
  asset["icon"] = "";
  return asset;
}
