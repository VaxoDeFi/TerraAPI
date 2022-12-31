import cron from "node-cron";

/**
 * Update prices in Database
 *
 */
// cron.schedule("* * * * *", async () => {
//   console.log("Running CRON JOB ");
//   const assets = await getAssets();
//   const list = assets.data;
//   await updateAssets(list.data); // Change to update mode
// });
export default cron;