import chalk from "chalk";
import ora from "ora";
import { getApiCoinAssets, updateAssets } from "../services/assets";

async function MessariPrices(job: any, done: any) {
  const spinner = ora({
    text: "Job starting - API Coin scraping",
    color: "red",
    hideCursor: false,
  }).start();
  try {
    const date = Date.now();
    spinner.text = "[API COIN] Retrieve data assets";
    const assets = await getApiCoinAssets();
    const list = assets.data;
    spinner.text = "Update database";
    await updateAssets(list.data); // Change to update mode
    spinner.succeed(`Successfull after ${Date.now() - date}ms`);
    spinner.clear();
    console.log(
      chalk.yellow.bold(`Crypto Assets on ${new Date().toISOString()}:`)
    );
    done();
  } catch (error) {
    spinner.fail("[API COIN] Scraping failed");
    spinner.clear();
    console.log(error);
  }
}

export default MessariPrices;
