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

