import cron from "node-cron";
import { getAssets } from "../services/assets";

/**
 * Update prices in Database
 *
 */
cron.schedule("1 * * * * *", async () => {
  const assets = await getAssets();
    
});

export default cron;
