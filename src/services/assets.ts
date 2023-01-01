// // import tokens from '../data/whitelist.json';
import env from "@env";
import axios from "axios";
import { createOrUpdate } from "../db/pg/coins";
import { alchemy } from "./alchemy";

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
 * Get all token from balance.
 *
 */
export async function getTokenBalances(address: string) {
  const balances = await alchemy.core.getTokenBalances(address);
  const nonZeroBalances = balances.tokenBalances.filter((token) => {
    return token.tokenBalance !== "0";
  });
  let list = [];
  // Loop through all tokens with non-zero balance
  for (let token of nonZeroBalances) {
    var coin: any = {};

    // Get balance of token
    let balance: any = token.tokenBalance;

    // Get metadata of token
    const metadata: any = await alchemy.core.getTokenMetadata(
      token.contractAddress
    );
    coin.logo = metadata.logo;
    coin.name = metadata.name;
    coin.symbol = metadata.symbol;
    coin.decimals = metadata.decimals;

    // Compute token balance in human-readable format
    balance = balance / Math.pow(10, metadata.decimals);
    balance = balance.toFixed(2);
    // console.log(`${metadata.name}: ${balance} ${metadata.symbol}`);
    coin.balance = balance;
    coin.contractAddress = token.contractAddress;
    list.push(coin);
  }
  return list;
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
