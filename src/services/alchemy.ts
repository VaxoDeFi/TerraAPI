import { Network, Alchemy } from "alchemy-sdk";
import env from "@env";

const settings = {
  apiKey: env.ALCHEMY_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);
