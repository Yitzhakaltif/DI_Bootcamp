CREATE TABLE city_info (
  event_datetime timestamp NOT NULL,
  city VARCHAR(50) NOT NULL,
  temperature decimal NOT NULL,
  light decimal NOT NULL,
  airquality_raw decimal NOT NULL,
  sound decimal NOT NULL,
  humidity decimal NOT NULL,
  dust decimal NOT NULL
)
SELECT * FROM city_info


COPY city_info(event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust)
FROM 'C:\Users\Public\Documents\city_info.csv'
DELIMITER ','
CSV HEADER;

SELECT * FROM city_info;
SELECT COUNT(*) AS number_of_rows FROM city_info;
​
-- 2. What was Bostons temperature on the 01/03/2015 at 11am
SELECT temperature, city FROM city_info WHERE city='Boston' AND event_datetime = '2015-03-01 11:00:00';
​
SELECT temperature, city FROM city_info WHERE city='Boston' AND 
event_datetime::timestamp::date = '2015-03-01' AND
EXTRACT(Hour from event_datetime) = 11;
​
-- 3. When (ie. days and hours) was the temperature between 28 and 30 degrees in San Francisco ? 
SELECT event_datetime, temperature FROM city_info WHERE city='San Francisco' AND temperature BETWEEN '28' AND '30';
​
-- 4. Which city was the most noisy (show the name of the city, the date and the noise index) ?
SELECT city, event_datetime::timestamp::date AS date, sound FROM city_info ORDER BY sound DESC LIMIT 1;
​
-- 5. Which city was the least noisy (show the name of the city, the date and the noise index)
SELECT city, event_datetime::timestamp::date AS date, sound FROM city_info ORDER BY sound ASC LIMIT 1;
​
-- 6. Show the dust index of San Francisco on the 26/03/2015 after 20:00.
SELECT city, dust, event_datetime FROM city_info WHERE city='San Francisco' 
AND event_datetime::timestamp::date = '2015-03-26' 
AND EXTRACT(hour from event_datetime) > 20;
​
-- 7.  When (ie. days and hours) is the humidity index less that 40 or more than 60 in Geneva?
SELECT event_datetime, humidity FROM city_info WHERE city='Geneva' AND humidity NOT BETWEEN 40 AND 60;
SELECT city, event_datetime, humidity FROM city_info WHERE city='Geneva' AND (humidity <= 40 OR humidity >= 60);
​
-- 8. Where and when (Find the day (Sunday-Saturday)) is the light index the highest? - Use an alias for the day of the week.
SELECT city, light, EXTRACT(DOW from event_datetime) AS day_of_week FROM city_info ORDER BY light DESC LIMIT 1;
​
-- 9. Select only the name of the cities that start with an "S" (uppercase of lowercase). - Look at the DISTINCT constraint.
SELECT DISTINCT city FROM city_info WHERE city ILIKE 's%';
​
-- 10. Add to the table, todays information in Israel - of this very hour. 
-- (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
-- - Use the return statement to see what you just inserted
INSERT INTO city_info (event_datetime,city,temperature,light,airquality_raw,sound,humidity,dust)
VALUES (NOW(), 'Israel', '10', 10,10,10,10,10)
RETURNING *
​

-- -- Use aggregate functions
-- 1. How many rows per city does the table have ?
SELECT city, count(*) from city_info GROUP BY city;
-- 2. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
SELECT AVG(dust) from city_info
WHERE city LIKE 'Boston'
AND event_datetime >= '2015-03-01'
AND event_datetime <= '2015-03-05';
-- 3. How many rows does the table have about the city "San Francisco" ?
SELECT count(*) FROM city_info WHERE city LIKE 'San Francisco';
-- 4. Where and when (only hour) it's the noisiest in the world?
-- SELECT city, EXTRACT(hour from event_datetime) as hour_of_day, sound
-- FROM city_info
-- ORDER BY sound DESC LIMIT 1;
SELECT city, EXTRACT(hour from event_datetime) as hour_of_day, sound
FROM city_info
WHERE sound = (SELECT MAX(sound) FROM city_info);
