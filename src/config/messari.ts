import chalk from "chalk";
import ora from "ora";
import { getApiMessari, insertMessari } from "../services/assets";

async function MessariPrices(job: any, done: any) {
  const spinner = ora({
    text: "Job starting - Messari scraping",
    color: "blue",
    hideCursor: false,
  }).start();
  try {
    const date = Date.now();
    spinner.text = "[MESSARI] Retrieve data assets";
    const assets = await getApiMessari();
    const list = assets.data;
    spinner.text = "Update database";
    await insertMessari(list.data); // Change to update mode
    spinner.succeed(`Successfull after ${Date.now() - date}ms`);
    spinner.clear();
    console.log(
      chalk.yellow.bold(`Messari Assets on ${new Date().toISOString()}:`)
    );
    done();
  } catch (error) {
    spinner.fail("[MESSARI] Scraping failed");
    spinner.clear();
    console.log(error);
  }
}

export default MessariPrices;
