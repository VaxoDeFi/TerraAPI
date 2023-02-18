// // import tokens from '../data/whitelist.json';
import env from "@env";
import axios from "axios";
import { checkFileExists } from "../routes/resources";
import { Utils } from "alchemy-sdk";
import { alchemy } from "./alchemy";
import { upsertMessari } from "../db/pg/messari";

export async function updateAssets(data: CoinDB[]) {
  const newData = data.map((v: any) => {
    v.idRank = v.id;
    v.icon = "";
    delete v.id;
    return v;
  });
  // await createOrUpdate(newData);
}

function newMessariAsset(data: Partial<Messari>): Messari {
  return {
    id: data.id ? data.id : "",
    symbol: data.symbol ? data.symbol : "",
    rank: data.rank ? data.rank : 0,
    icon: "",
    slug: data.slug ? data.slug : "",
    name: data.name ? data.name : "",
    contract_addresses: data.contract_addresses ? data.contract_addresses : "",
    priceUsd: data.priceUsd ? data.priceUsd : 0,
    priceBtc: data.priceBtc ? data.priceBtc : 0,
    priceEth: data.priceEth ? data.priceEth : 0,
    percentageChange1HrUsd: data.percentageChange1HrUsd
      ? data.percentageChange1HrUsd
      : 0,
    percentageChange24HrUsd: data.percentageChange24HrUsd
      ? data.percentageChange24HrUsd
      : 0,
    currentMarketcap: data.currentMarketcap ? data.currentMarketcap : 0,
    vol24HrUsd: data.vol24HrUsd ? data.vol24HrUsd : 0,
    realVol24HrUsd: data.realVol24HrUsd ? data.realVol24HrUsd : 0,
    athUsd: data.athUsd ? data.athUsd : 0,
    athTimestamp: data.athTimestamp ? data.athTimestamp : 0,
    percentageDownFromAth: data.percentageDownFromAth
      ? data.percentageDownFromAth
      : 0,
    category: data.category ? data.category : "",
    sector: data.sector ? data.sector : "",
    nextHalvingDate: data.nextHalvingDate ? data.nextHalvingDate : null,
    genesisBlockDate: data.genesisBlockDate ? data.genesisBlockDate : 0,
    tokenType: data.tokenType ? data.tokenType : "",
    tokenUsage: data.tokenUsage ? data.tokenUsage : "",
    consensusAlgorithm: data.consensusAlgorithm ? data.consensusAlgorithm : "",
  };
}

export async function insertMessari(data: any) {
  var len = data.length;
  for (var i = 0; i < len; i++) {
    var asset = newMessariAsset(data[i]);
    asset.contract_addresses = asset.contract_addresses
      ? JSON.stringify(asset.contract_addresses)
      : "";
    asset.icon = "/res/assets/" + asset.symbol.toLowerCase() + ".png";
    console.log(asset);
    await upsertMessari(asset);
  }
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
    coin.vaxo_icon = null;
    const path = `resources/32@2x/icon/${String(
      metadata.symbol
    ).toLowerCase()}@2x.png`;
    const exists = await checkFileExists(path);
    if (exists) {
      coin.vaxo_icon = `/res/assets/${String(
        metadata.symbol
      ).toLowerCase()}.png`;
      coin.logo = null;
    }
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
 * Get the total ETH balance of address
 *
 */
export async function getBalance(address: string) {
  let balance = await alchemy.core.getBalance(address, "latest");
  const total = Utils.formatEther(balance);
  return total;
}

/**
 * Get all prices API COIN.
 *
 */
export async function getApiCoinAssets() {
  const assets = await axios.get(`https://api.coincap.io/v2/assets`);
  return assets;
}

/**
 * Get all prices API Messari.
 *
 */
export async function getApiMessari() {
  const assets = await axios.get(
    `https://data.messari.io/api/v1/markets/prices-legacy`
  );
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
