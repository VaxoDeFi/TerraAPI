import express from "express";
import buildServer from "./server";
import cron from "./config/cron";

async function startServer() {
  const PORT = process.env.PORT || 8085;
  const app = express();
  await buildServer({
    server: app
  });
  cron.getTasks();
  app.listen(PORT, () => {
    console.log(`Your server is ready ! http://0.0.0.0:${PORT}`);
  });
}

startServer();