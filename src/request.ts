import axios from "axios";

export const url = "https://pro-api.coinmarketcap.com/v1/";
export const key = {
  params: {
    CMC_PRO_API_KEY: process.env.CMC_KEY,
  },
};

export function getPrices() {
    return axios
      .get(url + "cryptocurrency/listings/latest", key)
      .then((response) => response.data);
}
