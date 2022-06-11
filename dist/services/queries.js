// // import tokens from '../data/whitelist.json';
import axios from "axios";
/**
 * Get all prices.
 *
 */

export async function getAssets() {
  const assets = await axios.get(`https://api.coincap.io/v2/assets`); // const data = prices.data.prices;
  // let priceList = [];
  // Object.keys(prices.data.prices).forEach(function(key){
  //   if(tokens[key]) {
  //     let obj = data[key];
  //     obj.protocol = tokens[key].protocol;
  //     obj.symbol = tokens[key].symbol;
  //     obj.token = tokens[key].token;
  //     obj.icon = tokens[key].icon;
  //     priceList.push(obj);
  //   }
  // })

  console.log(assets);
  return assets;
}
/**
 * Get pairs from API.
 *
 */

export async function getAsset(id) {
  const req = await axios.get(`https://api.coincap.io/v2/assets/${id}`);
  const candle = await axios.get(`https://api.coincap.io/v2/candles?exchange=binance&interval=m30&baseId=${id}&quoteId=tether`);
  const asset = req.data.data;
  asset["candle"] = candle.data.data;
  return asset;
} // /**
//  * Get the price by denom.
//  *
//  * @returns {Array}
//  */
// export async function fetchPriceByDenom(denom){
//     let prices = await axios.get('https://api.extraterrestrial.money/v1/api/prices');
//     const data = prices.data.prices;
//     let price = [];
//     Object.keys(data).forEach(function(key){
//       if(denom === key){
//         let obj = data[key];
//         obj.protocol = tokens[key].protocol;
//         obj.symbol = tokens[key].symbol;
//         obj.token = tokens[key].token;
//         obj.icon = tokens[key].icon;
//         price.push(obj);
//       }
//     });
//     return price;
// }
// /**
//  * Get token balance of user.
//  *
//  * @returns {Promise}
//  */
// export function fetchTokenBalance(list){
//     return;
// }