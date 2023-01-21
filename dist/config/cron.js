import cron from "node-cron";

/**
 * Update prices in Database
 *
 */
// cron.schedule("* * * * *", async () => {
//   console.log(chalk.green("Running scheduled job"));
//   const spinner = ora({
//     text: "Job starting - Assets scraping",
//     color: "blue",
//     hideCursor: false,
//   }).start();
//   try {
//     const date = Date.now();
//     spinner.text = "Retrieve data assets";
//     const assets = await getAssets();
//     const list = assets.data;
//     spinner.text = "Update database";
//     await updateAssets(list.data); // Change to update mode
//     spinner.succeed(`Successfull after ${Date.now() - date}ms`);
//     spinner.clear();
//     console.log(
//       chalk.yellow.bold(`Crypto Assets on ${new Date().toISOString()}:`)
//     );
//   } catch (error) {
//     spinner.fail("Scraping failed");
//     spinner.clear();
//     console.log(error);
//   }
// });
export default cron;