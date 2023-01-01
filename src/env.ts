/**
 * Initialize environment variables.
 */
export default {
  MODE: process.env.MODE ? process.env.MODE : "production",
  POSTGRESQL_ADDON_DB: process.env.DOCKER_ENV
    ? process.env.POSTGRES_DB
    : process.env.POSTGRESQL_ADDON_DB,
  POSTGRESQL_ADDON_HOST: process.env.DOCKER_ENV
    ? "postgres"
    : process.env.POSTGRESQL_ADDON_HOST,
  POSTGRESQL_ADDON_PASSWORD: process.env.DOCKER_ENV
    ? process.env.POSTGRES_PASSWORD
    : process.env.POSTGRESQL_ADDON_PASSWORD,
  POSTGRESQL_ADDON_PORT: process.env.DOCKER_ENV
    ? ""
    : process.env.POSTGRESQL_ADDON_PORT,
  POSTGRESQL_ADDON_USER: process.env.DOCKER_ENV
    ? process.env.POSTGRES_USER
    : process.env.POSTGRESQL_ADDON_USER,
  ALCHEMY_KEY: process.env.ALCHEMY_KEY,
  BUCKET_HOST: process.env.BUCKET_HOST,
  API_URL: process.env.API_URL,
  COOKIE_SECRET: process.env.COOKIE_SECRET,
  COINCAP_URL: process.env.COINCAP_URL,
  TESTING: !!process.env.TESTING,
};
