SELECT * FROM hotel.Customers;
SELECT * FROM hotel.Reservations;


SELECT * FROM hotel.Customers AS C WHERE EXISTS(
	SELECT * FROM hotel.Reservations WHERE C.CustomerId = Reservations.CustomerId
);

SELECT * FROM hotel.Customers AS C WHERE NOT EXISTS(
	SELECT * FROM hotel.Reservations WHERE C.CustomerId = Reservations.CustomerId
);

SELECT `Name` FROM praticando.manufacturers AS m 
WHERE NOT EXISTS (
	SELECT * FROM praticando.products
    WHERE Manufacturer = m.Code
);

