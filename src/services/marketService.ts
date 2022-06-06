// // import tokens from '../data/whitelist.json';
// import axios from 'axios';

// /**
//  * Get all prices.
//  *
//  * @returns {Promise}
//  */
// export async function fetchPrices(){
//     const prices = await axios.get('https://api.extraterrestrial.money/v1/api/prices');
//     const data = prices.data.prices;
//     let priceList = [];
//     Object.keys(prices.data.prices).forEach(function(key){
//       if(tokens[key]) {
//         let obj = data[key];
//         obj.protocol = tokens[key].protocol;
//         obj.symbol = tokens[key].symbol;
//         obj.token = tokens[key].token;
//         obj.icon = tokens[key].icon;
//         priceList.push(obj);
//       }
//     })
//     return Promise.resolve(priceList);
// }

// /**
//  * Get pairs from API.
//  *
//  * @returns {Promise}
//  */
//  export async function fetchPairs(denom){
//     const pairs = await axios.get('https://api.terraswap.io/dashboard/pairs');
//     return Promise.resolve(pairs);
// }


// /**
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