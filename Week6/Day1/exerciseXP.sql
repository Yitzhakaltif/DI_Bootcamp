CREATE TABLE items(
 id_product serial Primary key, 
 product text, 
 price smallint
);

 
 INSERT INTO items (product, price) VALUES ('smalldesk', 100);
 INSERT INTO items (product, price) VALUES ('largedesk', 300);
 INSERT INTO items (product, price) VALUES ('fan', 80);
SELECT * FROM items;

CREATE TABLE customers(
 id_customer serial Primary key, 
 first_name text, 
 last_name text
);

 INSERT INTO customers (first_name, last_name) VALUES ('Greg', 'Jones');
 INSERT INTO customers  (first_name, last_name) VALUES ('Sandra', 'Jones');
 INSERT INTO customers  (first_name, last_name) VALUES ('Scott', 'Scott');
 INSERT INTO customers  (first_name, last_name) VALUES ('Trevor', 'Green');
 INSERT INTO customers  (first_name, last_name) VALUES ('Melanie', 'Johnson');
SELECT * FROM customers;

SELECT * From items;
SELECT * From items WHERE price > 80;
SELECT * From items WHERE price <= 300;
SELECT * From customers WHERE last_name = 'Smith';
SELECT * From customers WHERE last_name = 'Jones';
SELECT * From customers WHERE first_name != 'Scott';

