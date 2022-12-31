import cron from "node-cron";
import { getAssets, updateAssets } from "../services/assets";
/**
 * Update prices in Database
 *
 */

cron.schedule("5 * * * * *", async () => {
  console.log("Running CRON JOB ");
  const assets = await getAssets();
  const test = assets.data;
  await updateAssets(test.data);
});
export default cron;