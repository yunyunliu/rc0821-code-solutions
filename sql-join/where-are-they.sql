-- Generate a list of all addresses in the system that includes their "line1",
-- "city"."name", and "district". Bragging rights if you get the name of the country in there too.
SELECT "line1",
        "cities"."name" as "city",
        "district",
        "countries"."name" as "country"
      FROM "addresses"
      JOIN "cities" using ("cityId")
      JOIN "countries" using ("countryId");
