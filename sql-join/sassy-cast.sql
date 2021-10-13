-- Use two joins to select the "firstName" and "lastName" of all
-- actors that starred in the film 'Jersey Sassy'. There is a special table
-- in the database named "castMembers" for this purpose.

SELECT "firstName",
        "lastName"
    FROM "actors"
    JOIN "castMembers" using ("actorId")
    JOIN "films" using ("filmId")
  WHERE "films"."title" = 'Jersey Sassy';
