select "categories"."name" as "filmCategories", count("categoryId") as "numberOfRoles"
from "actors"
join "castMembers" using ("actorId")
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "actorId" = 178
group by "categoryId"
