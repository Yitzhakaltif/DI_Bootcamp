--  Exercise 1 : Items And Customers

--1. All items, ordered by price (lowest to highest).
SELECT product, price 
FROM items 
WHERE price > 10.00 
ORDER BY price ASC;
--2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
SELECT product, price 
FROM items 
WHERE price > 80.00 
ORDER BY price DESC;
--3. The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name 
FROM customers
ORDER BY first_name ASC;
--4. All last names (no other columns!), in reverse alphabetical order (Z-A).
SELECT last_name
FROM customers
ORDER BY last_name DESC;







