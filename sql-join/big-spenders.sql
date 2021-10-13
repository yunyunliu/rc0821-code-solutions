-- Select the 10 largest payment amounts, including the first and last name of the customer who paid.
SELECT "firstName",
        "lastName"
      FROM "customers"
      JOIN "payments" using ("customerId")
    ORDER BY "amount" desc
    LIMIT 10;
