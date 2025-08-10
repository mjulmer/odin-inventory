const { Pool } = require("pg");
require("dotenv").config();

const { SHOULD_RUN_LOCALLY, PG_USER, PG_PASS, DATABASE_URL } = process.env;

const connectionString = SHOULD_RUN_LOCALLY
  ? `postgresql://${PG_USER}:${PG_PASS}@localhost:5432/inventory`
  : DATABASE_URL;

module.exports = new Pool({
  connectionString: connectionString,
});
