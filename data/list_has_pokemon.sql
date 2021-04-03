CREATE TABLE list_has_pokemon (id SERIAL PRIMARY KEY NOT NULL, list_id INTEGER NOT NULL REFERENCES pokemon("id"), pokemon_id INTEGER NOT NULL REFERENCES id("id"));

ALTER TABLE Pokemon add unique (ID);