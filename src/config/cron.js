import cron from "node-cron";

cron.schedule("1 * * * * *", async () => {
  console.log("running a task every minute");
});