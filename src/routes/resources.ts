import express from "express";
var res = express.Router();
import env from "@env";
import { createReadStream } from "fs";
import { access } from "fs/promises";
import { F_OK } from "constants";
import type { Request, Response } from "express";

const checkFileExists = async (file: string) =>
  await access(file, F_OK)
    .then(() => true)
    .catch(() => false);

const returnFile = async (path: string, id: string, res: Response) => {
  const exists = await checkFileExists(path);
  console.log(exists);
  console.log(path);
  if (!exists) {
    res.status(404).send("File doesn't exist");
    return;
  }
  try {
    res.sendFile(`32@2x/icon/${id}@2x.png`, { root: "resources" });
  } catch (e) {
    res.status(500).send(e);
  }
};

res.get("/assets/:id.png", async (req: Request, res: Response) => {
  const id = req.params.id;
  const path = `resources/32@2x/icon/${id}@2x.png`;
  await returnFile(path, id, res);
});

export default res;
