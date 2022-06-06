import env from "../env";
import pg from "pg";
const {
  Pool
} = pg;
export let pool;
export const pgInit = async () => {
  pool = new Pool({
    host: env.POSTGRESQL_ADDON_HOST || undefined,
    database: env.POSTGRESQL_ADDON_DB || undefined,
    user: env.POSTGRESQL_ADDON_USER || undefined,
    password: env.POSTGRESQL_ADDON_PASSWORD || undefined,
    port: Number(env.POSTGRESQL_ADDON_PORT) || undefined
  });
  console.log("WORKER " + process.pid + " : [DB] Database connection initialized.");
};
export const pgClose = async () => {
  console.log("WORKER " + process.pid + " : [DB] Database connection closed.");
  return pool.end();
};