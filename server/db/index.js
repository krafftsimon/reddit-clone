const pg = require('pg');
const config = require('../config')[process.env.NODE_ENV];

const pool = new pg.Pool({connectionString: config.dbConnectionString});

function query(text, params, callback) {
  return pool.query(text, params, callback);
}

module.exports = {
  query,
}