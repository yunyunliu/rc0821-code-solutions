-- List the number of "cities" per country in the "countries" table.
-- Hint: There should be 35 in the United States, for example.

SELECT "countries"."name" AS "country",
      count("cities".*) AS "number of cities"
    FROM "countries"
    JOIN "cities" USING ("countryId")
  GROUP BY "countries"."name";
