-- Use two joins to select the "releaseYear" and "categories"."name" of the film with the
-- "title" 'Boogie Amelie'. There is a special table in the database named "filmCategory" for this purpose.

SELECT "releaseYear",
        "categories"."name"
    FROM "films"
    JOIN "filmCategory" using ("filmId")
    JOIN "categories" using ("categoryId")
  WHERE "films"."title" = 'Boogie Amelie';
