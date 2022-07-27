CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (20) NOT NULL,
 last_name VARCHAR (25) NOT NULL,
 date_birth DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
);

SELECT first_name, last_name FROM actors;
SELECT * FROM actors;

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES('Matt','Damon','1970-10-08',5);

 SELECT first_name, last_name, number_oscars FROM actors;
SELECT * FROM actors;

INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES('George','Clooney','1961-05-06',2);


INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES('Stacy','Litt','1990-10-10',4);


INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES('Rachel','Ross','1998-11-08',1);



INSERT INTO actors (first_name, last_name, date_birth, number_oscars)
VALUES
    ('Jenifer', 'Aniston','1997-10-30', 0),
    ('Matt', 'ABC','1997-10-30', 0);
--  1   
SELECT * FROM actors
LIMIT 4;
--2
SELECT * 
FROM actors
ORDER BY (last_name) DESC
LIMIT 4;
    SELECT first_name FROM actors WHERE first_name LIKE '%e%'

 SELECT * FROM actors WHERE number_oscars >=5;

 ALTER TABLE actors ADD COLUMN salary integer default 0;
ALTER TABLE actors ADD COLUMN nationality varchar(20);
​
--Update
-- 1. Salary of 100000 for actors that have more than 2 oscars
​
UPDATE actors 
SET salary=100000 
WHERE number_oscars >= 2
RETURNING *
​
-- Salary of 50000 for actors that have less than 2 oscars
​
UPDATE actors 
SET salary=50000 
WHERE number_oscars < 2
RETURNING *
​
-- Matt Damon won another oscar, change the table accordingly
​
UPDATE actors 
SET number_oscars = number_oscars+1
WHERE first_name='Matt' AND last_name='Damon'
RETURNING *
​
-- We are in Hollywood, add to all actors a nationality "American"
​
UPDATE actors 
SET nationality = 'American'
RETURNING *
​
-- Change the salary proportionally to their number of oscars, for the 2 first actors (IN clause)
​
UPDATE actors 
SET salary = salary*number_oscars
WHERE actor_id IN (1, 2)
RETURNING *

-- Number of lines : in the table
SELECT COUNT(*) FROM actors
SELECT * FROM actors
-- -- -- 2 actors have more than 2 oscars
SELECT COUNT(*) FROM actors WHERE number_oscars >= 2;

-- -- Max and Min
SELECT MAX(number_oscars), Min(number_oscars) FROM actors;
-- select the names of the actors with the highest number of oscar
SELECT first_name, last_name FROM actors 
WHERE number_oscars = (SELECT MAX(number_oscars) FROM actors);

-- --Average
SELECT AVG(number_oscars) FROM actors;
-- -- Need to Round it
SELECT ROUND(AVG(number_oscars), 2) FROM actors;

-- --Sum
SELECT SUM(number_oscars) FROM actors;

-- --Problem
-- -- ERROR:  column "actors.first_name" must appear in the GROUP BY clause or be used in an aggregate function
-- SELECT first_name, last_name, AVG(number_oscars) FROM actors;

-- -- Group By
-- -- The GROUP BY statement groups rows that have the same values into summary rows,
-- -- The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) 
-- -- to group the result-set by one or more columns.
-- -- The queries that contain the GROUP BY clause are called grouped 
-- -- queries and only return a single row for every grouped item.

SELECT nationality, COUNT(*) FROM actors GROUP BY nationality
HAVING nationality='American';

-- INSERT into actors (first_name, last_name, number_oscars,date_birth, nationality)
-- VALUES ('Matt', 'ABC', 1, '2002-08-12', 'American')

SELECT first_name, nationality, COUNT(*) FROM actors GROUP BY first_name, nationality;

-- SELECT column_name1, column_name2, AggFunc 
-- FROM table_name
-- Group by column_name1, column_name2
-- HAVING condition

SELECT first_name, nationality, COUNT(*) FROM actors GROUP BY first_name, nationality;


-- Foreign Key
-- an actor can play in many movies
CREATE TABLE movies(
movie_id SERIAL PRIMARY KEY,
movie_title VARCHAR (50) NOT NULL,
movie_story TEXT,
actor_playing_id INTEGER REFERENCES actors (actor_id)
);
-- Foreignkey syntax
-- name_column type REFERENCES other_table_name (pk column_name_of_other_table)
-- SELECT * FROM movies;
-- Error
-- ERROR:  insert or update on table "movies_test" violates foreign key constraint 
-- "movies_test_actor_playing_id_fkey"
-- DETAIL:  Key (actor_playing_id)=(10) is not present in table "actors_test".
-- INSERT INTO movies (movie_title, movie_story,actor_playing_id)
-- VALUES('Gravity','Gravity is a 2013 science fiction thriller',10);
-- -- SUBQUERY
INSERT INTO movies (movie_title, movie_story,actor_playing_id)
VALUES('Gravity',
       'Gravity is a 2013 science fiction thriller',
       (SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney'));
INSERT INTO movies (movie_title, movie_story,actor_playing_id)
VALUES('Oceans Eleven',
       'Danny Ocean, wants to pull off the crime of the century, by ripping off three Casinos at the same time,',
       (SELECT actor_id FROM actors WHERE first_name='George' AND last_name='Clooney'));
SELECT first_name, last_name, movie_title
FROM actors
INNER JOIN movies
ON actor_id = actor_playing_id
WHERE movie_title ILIKE '%ocean%'
SELECT movie_title
FROM movies
INNER JOIN actors
ON actor_id = actor_playing_id
WHERE first_name='George' AND last_name='Clooney';