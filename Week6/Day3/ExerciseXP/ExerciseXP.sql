--Exercise 1:
    --1.
        SELECT * 
        FROM language
        INNER JOIN film
        ON film.language_id = language.language_id
    --2.
        --1.
            SELECT title, description, language.name
            FROM film
            INNER JOIN language
            ON film.language_id = language.language_id
        --2.
            SELECT title, description, language.name
            FROM film
            LEFT JOIN language
            ON film.language_id = language.language_id

        --3.
            CREATE TABLE new_film(
                newfilm_id SERIAL PRIMARY KEY,
                newfilm_name text
            );

            INSERT INTO new_film(newfilm_name)
            VALUES
            ('Fallen Behind'),
            ('Fast and Furious'),
            ('SpiderMan'),
            ('SuperMan');
            SELECT * FROM new_film
    --4.
        CREATE TABLE customer_review(
          review_id SERIAL NOT NULL PRIMARY KEY ,
          film_id INTEGER REFERENCES new_film (newfilm_id) ON DELETE SET NULL ON UPDATE SET NULL,
          language_id INTEGER REFERENCES language (language_id)  ON DELETE SET NULL ON UPDATE SET NULL,
          title_review text,
          score smallint,
          review_text text,
          last_update TIMESTAMP WITHOUT TIME ZONE
        );
    --5.
        INSERT INTO customer_review(film_id, language_id, title_review, score, review_text, last_update)
        VALUES((SELECT newfilm_id FROM new_film WHERE newfilm_id = 1), 
              (SELECT language_id FROM language WHERE name = 'English'),
              'SpiderMan', 10, 'One of the best movies Ive ever watched!', '2006-02-14 11:10:50');

        INSERT INTO customer_review(film_id, language_id, title_review, score, review_text, last_update)
        VALUES((SELECT newfilm_id FROM new_film WHERE newfilm_id = 1), 
              (SELECT language_id FROM language WHERE name = 'English'),
              'Fast and Furious', 10, 'The most thrilling movie Ive ever watched!!', '2006-02-15 10:09:25');

    --6.

        DELETE from customer_review WHERE title_review='SpiderMan';





--Exercise: 2

    --1.
        UPDATE film
        SET language_id = 4
        WHERE title = 'Fever Empire'

        UPDATE film
        SET language_id = 2
        WHERE title = 'Rage Games'

        UPDATE film
        SET language_id = 5
        WHERE title = 'Wonka Sea'

    --2.
        -- Customer table has the foreign id for the store id, if we insert a new customer
        -- we need to specify which store out of the 2 the customer belongs to as both stores have
        -- different addresses and managers
    --3.
        DROP TABLE customer_review
        --easy step; child table
    --4.
        SELECT COUNT(*) 
        FROM rental 
        WHERE return_date=null 
    --5.
        SELECT *
        FROM film
        INNER JOIN inventory ON inventory.film_id = film.film_id
        INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
        WHERE return_date IS NULL
        ORDER BY replacement_cost DESC
        LIMIT 30;
    --6.
        --1.
            SELECT *
            FROM film
            INNER JOIN film_actor ON film_actor.film_id = film.film_id
            INNER JOIN actor ON actor.actor_id = film_actor.actor_id
            WHERE first_name = 'Penelope' AND last_name = 'Monroe' AND description ~ 'Sumo';
            --2.
            SELECT * FROM film
            WHERE rating = 'R' AND description ~ 'Documentary' AND length < 60;
        --3.
            SELECT *
            FROM film
            INNER JOIN inventory ON inventory.film_id = film.film_id
            INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
            INNER JOIN customer ON customer.customer_id = rental.customer_id
            WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND return_date > '2005-07-28' 
            AND return_date < '2005-08-01' AND rental_rate > 4;
        --4.

            SELECT title, replacement_cost, MAX(replacement_cost)
            FROM film 
            INNER JOIN inventory ON inventory.film_id = film.film_id
            INNER JOIN rental ON rental.inventory_id = inventory.inventory_id
            INNER JOIN customer ON customer.customer_id = rental.customer_id
            WHERE first_name = 'Matthew' AND last_name = 'Mahan' AND description ~ 'Boat' 
            GROUP BY title, replacement_cost
            ORDER BY replacement_cost DESC
            LIMIT 1;
