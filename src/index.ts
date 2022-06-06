import express from 'express';
import buildServer from './server';
import env from "@env";

async function startServer() {

  const PORT = process.env.PORT || 3000;
  const app = express();
  await buildServer({ server: app });

  app.listen(PORT, () => {
    console.log(`Your server is ready ! http://0.0.0.0:${PORT}`);
  });
}

startServer();