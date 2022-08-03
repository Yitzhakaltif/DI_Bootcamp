CREATE TABLE users(
    id serial primary key not null,
    email varchar(255) not null unique,
    password varchar(1000) not null
)

SELECT * FROM users