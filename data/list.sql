CREATE TABLE list (
    id SERIAL PRIMARY KEY NOT NULL, 
    name TEXT NOT NULL, 
    user_id INTEGER REFERENCES "user"("id"));