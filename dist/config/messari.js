import { parentPort } from "node:worker_threads";
import process from "node:process";
import chalk from "chalk";
import ora from "ora";
import { getAssets, updateAssets } from "../services/assets";
console.log(chalk.green("Running scheduled job"));
const spinner = ora({
  text: "Job starting - Assets scraping",
  color: "blue",
  hideCursor: false
}).start();

try {
  const date = Date.now();
  spinner.text = "Retrieve data assets";
  const assets = await getAssets();
  const list = assets.data;
  spinner.text = "Update database";
  await updateAssets(list.data); // Change to update mode

  spinner.succeed(`Successfull after ${Date.now() - date}ms`);
  spinner.clear();
  console.log(chalk.yellow.bold(`Crypto Assets on ${new Date().toISOString()}:`));
} catch (error) {
  spinner.fail("Scraping failed");
  spinner.clear();
  console.log(error);
}

console.log("Hello TypeScript!"); // signal to parent that the job is done

if (parentPort) parentPort.postMessage("done"); // eslint-disable-next-line unicorn/no-process-exit
else process.exit(0);