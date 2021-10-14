const pg = require('pg');
const express = require('express');
const app = express();
const port = 3000;

// database connection
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(port, () => {
  console.log(`server @ port ${port}`);
});
