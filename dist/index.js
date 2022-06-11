import express from "express";
import buildServer from "./server";

async function startServer() {
  const PORT = process.env.PORT || 8085;
  const app = express();
  await buildServer({
    server: app
  });
  app.listen(PORT, () => {
    console.log(`Your server is ready ! http://0.0.0.0:${PORT}`);
  });
}

startServer();