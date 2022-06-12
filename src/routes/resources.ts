import express from "express";
var res = express.Router();
import env from "@env";
import { createReadStream } from "fs";
import { access } from "fs/promises";
import { F_OK } from "constants";

const checkFileExists = async (file: string) =>
  await access(file, F_OK)
    .then(() => true)
    .catch(() => false);

const returnFile = async (path: string, res: any) => {
  const exists = await checkFileExists(path);
  if (!exists) {
    res.status(404).send("File doesn't exist");
    return;
  }
  try {
    return res
      .status(200)
      .type("application/octet-stream")
      .send(createReadStream(path));
  } catch (e) {
    res.status(500).send(e);
  }
};

res.get("/assets/:id.png", async (req, res) => {
  const id = req.params.id;
  const path = `/resources/assets/32@2x/icon/${id}@2x.png`;
  await returnFile(path, res);
});

export default res;
