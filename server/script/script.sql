CREATE DATABASE "favorite-wrestlersAPI";

\c favorite-wrestlersAPI;

DROP TABLE IF EXISTS FavoriteWrestler;

CREATE TABLE FavoriteWrestler(
    id SERIAL PRIMARY KEY,
    wrestler_name VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    wrestler_finisher VARCHAR(100) NOT NULL,
    user_description TEXT NOT NULL,
);

SELECT * FROM FavoriteWrestler;

