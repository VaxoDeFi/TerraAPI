import type { Request, Response } from "express";

function json(req: Request, res: Response, json: any) {
  var response = rootResponse();
  response["data"] = json;
  res.status(200).type("application/json").send(response);
}

function done(res: Response) {
  res.status(200).type("application/json").send(rootResponse());
}

function error(
  req: Request,
  code: string,
  message: string,
  details: string = ""
) {
  var response = errorResponse();

  response.status = "error";

  response.code = code;
  response.message = message;
  response.details = details;

  return response;
}

function exception(req: Request, code: string, e: any) {
  return error(req, code, e.message, e.stack);
}

export default {
  json,
  done,
  error,
  exception,
};

function errorResponse() {
  const delay = Date.now();
  return {
    status: "done",
    delay: delay,
    code: "",
    message: "",
    details: "",
  };
}

function rootResponse() {
  const delay = Date.now();
  return { status: "done", delay: delay, data: null };
}
