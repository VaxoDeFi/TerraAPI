import express from "express";
import Router from "./router";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import env from "./env";
export default (async ({
  server
}) => {
  server.get("/status", (req, res) => {
    res.status(200).end();
  });
  server.head("/status", (req, res) => {
    res.status(200).end();
  });
  server.enable("trust proxy");
  server.use(cors());
  server.use(helmet());

  if (env.MODE === "dev") {
    server.use(morgan("dev"));
  } else {
    server.use(morgan("combined"));
  }

  server.use(express.urlencoded({
    extended: true
  }));
  server.use(express.json());
  server.use("/", Router); // ...More middlewares

  return server;
});