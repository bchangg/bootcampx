SELECT students.name as student_name, email, cohorts.name as cohort_name
-- FROM cohorts INNER JOIN students ON cohort_id = cohorts.id;
FROM students FULL OUTER JOIN cohorts ON cohort_id = cohorts.id;
