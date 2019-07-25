const { Pool } = require('pg');
const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.connect((err) => {
  if (err) throw err;
  console.log("connected to db");
  console.log(`\n`);
});

pool.query(`
    SELECT 
      students.id AS student_id,
      students.name AS name,
      cohorts.name AS cohort
    FROM students
    JOIN cohorts ON cohorts.id = students.cohort_id
    WHERE cohorts.name LIKE '%${args[0]}%'
    LIMIT ${args[1]};
  `)
  .then((response) => {
    response.rows.forEach((user) => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort!`);
      console.log();
    });
  })
  .catch((err) => {
    console.error('query error', err.stack);
  });