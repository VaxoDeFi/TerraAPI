import env from "@env";
import axios from "axios";

/**
 * Get all prices.
 *
 */
export async function getFile() {
  const assets = await axios.get(`https://api.coincap.io/v2/assets`);
  return assets;
}
