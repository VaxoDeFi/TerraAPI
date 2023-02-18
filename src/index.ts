import express from "express";
import cluster from "cluster";
import { cpus } from "os";
import process from "process";
import Queue from "bull";
import buildServer from "./server";
import env from "@env";
import { prisma } from "./db/prisma";
import MessariPrices from "./config/messari";

const totalCPUs = cpus().length;

// const MessariQueue = new Queue("MessariQueue", {
//   redis: {
//     port: Number(env.REDIS_PORT),
//     host: env.REDIS_HOST,
//     password: env.REDIS_PASSWORD ? env.REDIS_PASSWORD : "",
//   },
// });

// const MessariQueue = new Queue("MessariQueue");

if (cluster.isPrimary) {
  var title = "💖  Vaxo BACKEND  📒\n";
  title += "-------------------\n";
  console.log(title + "🌍 VAXO WEBSERVICES");
}

async function startServer() {
  const PORT = process.env.PORT || 8085;
  const app = express();
  await prisma.$connect();
  await buildServer({ server: app });

  process.stdout.on("error", function (err) {
    if (err.code == "EPIPE") {
      process.exit(0);
    }
  });

  app.listen(PORT, async () => {
    console.log(`Your server is ready ! http://0.0.0.0:${PORT}`);
  });
}

if (cluster.isPrimary) {
  console.log("\nServeur starting on port " + process.env.PORT);
  if (env.MODE)
    console.log(
      "WARNING: The server is running in TESTING mode. (dedicated to dev & debug only!)"
    );

  const workersCount = env.MODE ? 1 : totalCPUs;
  console.log(
    "Number of CPUs is " +
      String(totalCPUs) +
      " >>> starting " +
      workersCount +
      " workers"
  );
  console.log(`Primary ${process.pid} is running`);
  for (let i = 0; i < workersCount; i++) {
    cluster.fork();
  }
  cluster.on("online", async function (worker) {
    console.log("Worker " + worker.process.pid + " is online");
    // MessariQueue.add(MessariPrices, { repeat: { every: 60000 } });
  });
  cluster.on("message", async (worker, message) => {
    if (message.code == "error") {
      // MessariQueue.close();
      console.log("> WORKER " + worker.process.pid + " CRASHED");
    }
  });
  cluster.on("exit", (worker, code, signal) => {
    console.log("> WORKER " + worker.process.pid + " EXIT");
    cluster.fork();
  });
}

// Start Server
else {
  // MessariQueue.process(async function (job, jobDone) {
  //   console.log("Job done by worker", job.id);
  //   await MessariPrices(job, jobDone);
  // });
  startServer();
}
