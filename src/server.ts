import express from "express";
import Router from "./router";
import morgan from "morgan";
import helmet from "helmet";
import cors from 'cors';

export default async ({ server }: { server: express.Application }) => {

  server.get('/status', (req, res) => { res.status(200).end(); });
  server.head('/status', (req, res) => { res.status(200).end(); });
  server.enable('trust proxy');

  server.use(cors());
  server.use(helmet());
  server.use(morgan("combined"));
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json())

  server.use('/', Router);

  // ...More middlewares

  return server;
};