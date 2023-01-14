import express from "express";
import cluster from "cluster";
import { cpus } from "os";
import process from "process";
import buildServer from "./server";
import env from "./env";
import { prisma } from "./db/prisma"; // import cron from "./config/cron";

const totalCPUs = cpus().length;

if (cluster.isPrimary) {
  var title = "💖  Vaxo BACKEND  📒\n";
  title += "-------------------\n";
  console.log(title + "🌍 VAXO WEBSERVICES");
}

async function startServer() {
  const PORT = process.env.PORT || 8085;
  const app = express();
  await prisma.$connect();
  await buildServer({
    server: app
  }); // cron.getTasks();

  app.listen(PORT, () => {
    console.log(`Your server is ready ! http://0.0.0.0:${PORT}`);
  });
}

if (cluster.isPrimary) {
  console.log("\nServeur starting on port " + process.env.PORT);
  if (env.TESTING) console.log("WARNING: The server is running in TESTING mode. (dedicated to dev & debug only!)"); // promClient.collectDefaultMetrics({
  //   labels: {NODE_PROCESS_PID: process.pid},
  // });

  const workersCount = env.TESTING ? 1 : totalCPUs;
  console.log("Number of CPUs is " + String(totalCPUs) + " >>> starting " + workersCount + " workers");
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < workersCount; i++) {
    cluster.fork();
  }

  cluster.on("online", function (worker) {
    console.log("Worker " + worker.process.pid + " is online");
  });
  cluster.on("message", async (worker, message) => {
    // if (message.code == 'metrics_request') {
    //   //handle metrics requests
    //   aggregatorRegistry.clusterMetrics().then((aggregatedMetrics) => {
    //     worker.process.send({
    //       code: 'metrics_response',
    //       data: aggregatedMetrics,
    //     });
    //   });
    // }
    if (message.code == "error") {
      console.log("> WORKER " + worker.process.pid + " CRASHED");
    }
  });
  cluster.on("exit", (worker, code, signal) => {
    // if (code != 0) worker_crash_counter.inc();
    cluster.fork();
  });
} // Start Server
else startServer();