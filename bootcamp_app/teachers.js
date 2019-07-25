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
    SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
    FROM teachers
    JOIN assistance_requests ON teacher_id = teachers.id
    JOIN students ON student_id = students.id
    JOIN cohorts ON cohort_id = cohorts.id
    WHERE cohorts.name = '${args[0]}'
    ORDER BY teacher;
  `)
  .then((response) => {
    response.rows.forEach((entry) => {
      console.log(`${entry.cohort}: ${entry.teacher}`);
    });
  })
  .catch((error) => {
    console.error('query error', error.stack);
  })