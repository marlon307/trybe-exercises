SELECT first_name, last_name FROM sakila.customer
UNION ALL
SELECT first_name, last_name FROM sakila.actor;

SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.customer
UNION ALL
SELECT first_name, last_name, customer_id FROM sakila.customer;

(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.customer)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer) ORDER BY first_name;

(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.customer LIMIT 10)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 10) ORDER BY first_name;

(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.customer LIMIT 10)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 10) ORDER BY first_name LIMIT 10;

(SELECT first_name, last_name, '-' AS 'customer_id' FROM sakila.customer LIMIT 20)
UNION ALL
(SELECT first_name, last_name, customer_id FROM sakila.customer LIMIT 20) ORDER BY first_name LIMIT 10 OFFSET 20;

SELECT first_name, last_name FROM sakila.customer
UNION
SELECT first_name, last_name FROM sakila.actor;