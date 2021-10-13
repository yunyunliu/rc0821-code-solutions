-- List the first and last name of all customers, plus the total amount
--  they've spent on rentals. Order them by total paid, descending.
-- Hint: Karl Seal should be first with $221.55 paid.

SELECT "customers"."customerId",
        "customers"."firstName",
        "customers"."lastName",
        sum("amount") as "Amount Spent"
      FROM "payments"
      JOIN "customers" using ("customerId")
    GROUP BY "customers"."customerId"
    ORDER By "Amount Spent" desc;
