select "countries"."name", count("countryId") as "numberOfCities"
from "countries"
join "cities" using ("countryId")
group by "countries"."countryId"
order by "countries"."name"
