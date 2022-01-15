CREATE DATABASE abstergo_industries;

CREATE TABLE subscriptions(
    subcriber_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    email CITEXT UNIQUE NOT NULL
);

CREATE TABLE applicants(
    applicant_id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    birthdate DATE NOT NULL,
    email CITEXT UNIQUE NOT NULL,
    contact_number VARCHAR(255) NOT NULL,
    live_in_major_city BOOLEAN NOT NULL,
    city VARCHAR(255) NOT NULL,
    subdivision VARCHAR(255),
    country VARCHAR(255) NOT NULL
);