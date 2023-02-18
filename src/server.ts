import express from "express";
import Router from "./router";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import env from "@env";
import { dirname } from "path";

export default async ({ server }: { server: express.Application }) => {
  // server.use(cors());
  server.use(
    cors({
      origin: true,
    })
  );
  server.get("/status", (req, res) => {
    res.status(200).end();
  });
  server.head("/status", (req, res) => {
    res.status(200).end();
  });
  server.enable("trust proxy");
  server.use("/resources", express.static("resources"));
  server.use(helmet());
  if (env.MODE === "dev") {
    server.use(morgan("dev"));
  } else {
    server.use(morgan("combined"));
  }
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  server.use("/", Router);

  // ...More middlewares

  return server;
};
