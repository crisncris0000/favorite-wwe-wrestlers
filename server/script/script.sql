CREATE DATABASE FavoriteWrestlersAPI;

\c FavoriteWrestlerAPI;


CREATE TABLE FavoriteWrestler(
    id SERIAL PRIMARY KEY,
    wrestler_name VARCHAR(100) NOT NULL,
    wrestler_finisher VARCHAR(100) NOT NULL,
    user_description TEXT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

SELECT * FROM FavoriteWrestler;

