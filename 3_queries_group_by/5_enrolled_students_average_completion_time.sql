SELECT
  students.name AS student,
  ROUND(AVG(assignment_submissions.duration), 2) as average_assignment_duration
FROM
  students
  JOIN assignment_submissions ON students.id = assignment_submissions.student_id
WHERE end_date IS NULL
GROUP BY student
ORDER BY average_assignment_duration DESC;
