select concat("firstName", ' ', "lastName") as "customer", sum("amount") as "totalSpent"
from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "totalSpent" desc;
