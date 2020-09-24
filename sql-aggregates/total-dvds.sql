select "storeId", count(*) as "totalDVDs"
from "inventory"
group by "storeId";
