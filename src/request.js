const axios = require("axios");

const url = "https://pro-api.coinmarketcap.com/v1/";
const key = {
  params: {
    CMC_PRO_API_KEY: process.env.CMC_KEY,
  },
};

function getPrices() {
    return axios
      .get(url + "cryptocurrency/listings/latest", key)
      .then((response) => response.data);
}