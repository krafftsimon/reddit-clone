import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'invinsible4',
  port: '5432',
});

const queryString = 'SELECT * FROM test;';
pool.query(queryString, (err, res) => {
  console.log(err, res);
  pool.end();
});

//psql -U postgres -h localhost postgres