import express from 'express';
import buildServer from './server';
import env from "@env";

async function startServer() {

  const app = express();
  await buildServer({ server: app });

  app.listen(env.PORT, () => {
    console.log(`Your server is ready !`);
  });
}

startServer();