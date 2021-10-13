-- List the categories of movies (and how many) that 'Lisa Monroe' appeared in.
-- Your result set should include 3 Sports films and 2 Sci-Fi films,
-- plus a lot more!
SELECT "categories"."name" AS "Category",
        count("films".*) AS "Number of FIlms"
    FROM "categories"
    JOIN "filmCategory" USING ("categoryId")
    JOIN "films" USING ("filmId")
    JOIN "castMembers" USING ("filmId")
    JOIN "actors" USING ("actorId")
  WHERE "actors"."firstName" = 'Lisa' AND
        "actors"."lastName" = 'Monroe'
  GROUP BY "Category";
