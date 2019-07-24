-- SELECT assignments.id,
--        assignments.day,
--        assignments.chapter,
--        assignments.name,
--        assignment_total_requests.total_requests
-- FROM
--  (SELECT assignments.name,
--          COUNT(assignments.*) AS total_requests
--   FROM assignments
--   JOIN assistance_requests ON assignments.id = assistance_requests.assignment_id
--   GROUP BY assignments.name) AS assignment_total_requests;

SELECT assignments.id,
       assignments.name,
       assignments.day,
       assignments.chapter,
       COUNT(assistance_requests) AS total_requests
FROM assignments
JOIN assistance_requests ON assignments.id = assistance_requests.assignment_id
GROUP BY assignments.id
ORDER BY total_requests DESC;

-- SELECT *
-- FROM assignments
-- JOIN assistance_requests ON assignments.id = assistance_requests.assignment_id
-- WHERE false;
