const pgp = require("pg-promise")();
const db = pgp({ host: process.env.DB_HOST, database: process.env.DB_NAME });

module.exports = db;
