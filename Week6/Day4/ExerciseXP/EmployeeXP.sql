-- Exercise 1:
-- 1. 
SELECT first_name "First Name",  last_name "Last Name" 
FROM Employees;

-- 2. 
SELECT department_id
FROM Employees
ORDER BY first_name DESC

--3. 
SELECT *
FROM Employees
ORDER BY first_name DESC

--4. 
SELECT first_name, last_name, salary, salary*.15 PF 
FROM Employees;

--5. 
SELECT first_name, last_name, employee_id
FROM Employees
ORDER BY salary ASC

--6. 
SELECT SUM(salary) 
FROM Employees;

--7.
SELECT MIN(salary), MAX(salary)
FROM Employees;

--8.
SELECT AVG(salary) 
FROM Employees;

--9.
SELECT COUNT(*) 
FROM employees;

--10.
SELECT Upper(first_name) 
FROM Employees;


--11.
SELECT SUBSTRING(first_name,1,3) 
FROM Employees;

--12.
SELECT first_name || ' ' || last_name 
AS full_name 
FROM Employees;


--13.

SELECT first_name,last_name, LENGTH(first_name)+LENGTH(last_name)  "Length of  Names" 
FROM Employees;

--14.
SELECT first_name 
FROM Employees 
WHERE  first_name ILIKE  '[0-9]'

--15.
SELECT *
FROM Employees
LIMIT 10;

--Exercise 2:

--1.
SELECT first_name, last_name, salary
FROM Employees
WHERE salary >=10000 AND salary <= 15000

--2.
SELECT first_name, last_name, hire_date 
FROM Employees
WHERE hire_date >= '1987-01-01' AND hire_date = '1987-01-01'

--3.
SELECT *
FROM Employees 
WHERE  first_name LIKE '%c%' AND first_name LIKE '%e%'

--4.
SELECT last_name, jobs.job_title, salary
FROM Employees
INNER JOIN jobs ON jobs.job_id = employees.job_id
WHERE salary != 4500 AND salary != 10000 AND salary != 15000
AND job_title != 'Programmer' AND job_title != 'Shipping Clerk'

--5.
SELECT last_name FROM Employees WHERE last_name LIKE '______';

--6.
SELECT *
FROM Employees 
WHERE first_name LIKE '__e%'

--7.
SELECT DISTINCT job_title
FROM Employees
INNER JOIN jobs ON jobs.job_id = employees.job_id

--8.
SELECT * 
FROM Employees
WHERE last_name LIKE 'Jones' OR last_name LIKE 'Blake' OR last_name LIKE 'Scott' OR last_name LIKE 'King' OR last_name LIKE 'Ford'