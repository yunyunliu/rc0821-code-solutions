-- Find the first and last name of every customer who rented 'Magic Mallrats'.
SELECT "firstName",
        "lastName"
      FROM "customers"
    JOIN "rentals" using ("customerId")
    JOIN "inventory" using ("inventoryId")
    JOIN "films" using ("filmId")
  where "films"."title" = 'Magic Mallrats';
