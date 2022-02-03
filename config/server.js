import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes";

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(helmet());
server.use(morgan("combined"));

routes(server);

export default server;