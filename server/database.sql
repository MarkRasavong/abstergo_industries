CREATE DATABASE abstergo_industries;

CREATE TABLE subscriptions(
    subcriber_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    email CITEXT UNIQUE NOT NULL
);