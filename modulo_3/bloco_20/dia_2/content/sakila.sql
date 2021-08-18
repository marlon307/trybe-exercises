USE sakila;
SELECT city, country_id FROM city;
SELECT first_name, last_name FROM customer;
SELECT * FROM rental;
SELECT title, description, release_year FROM film;

SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do filme' FROM film;
SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM film;
SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM address;
SELECT COUNT(title) FROM film;
SELECT COUNT(address) FROM sakila.address WHERE address2 = '';
SELECT * FROM sakila.address LIMIT 15;
SELECT * FROM sakila.address LIMIT 15 OFFSET 8;