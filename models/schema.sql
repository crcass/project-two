CREATE DATABASE IF NOT EXISTS devpool_db;

USE devpool_db;

CREATE TABLE devs (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(255),
skillOne VARCHAR(255),
skillTwo VARCHAR(255),
skillThree VARCHAR(255),
photo VARCHAR(255),
yearsExp INT,
github VARCHAR(255),
linkedin VARCHAR(255),
portfolio VARCHAR(255),
bio VARCHAR(255),
businessOne VARCHAR (255),
businessTwo VARCHAR(255),
businessThree VARCHAR(255),
PRIMARY KEY(id)
);

CREATE TABLE businesses (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(255),
skillOne VARCHAR(255),
skillTwo VARCHAR(255),
skillThree VARCHAR(255),
website VARCHAR(255),
photo VARCHAR(255),
address VARCHAR(255),
bio VARCHAR(255),
job_description VARCHAR(255),
PRIMARY KEY (id)
);


