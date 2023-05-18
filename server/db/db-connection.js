const pgp = require("pg-promise")();
const db = pgp({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
});

module.exports = db;
