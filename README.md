# Backend-Pagination-In-API

# Pagination:-
- Pagination means dividing the total results into smaller chunks which can be shown as pages to not overwhelm the customer and also more the data we pass to the frontend, slower the performance and we end up wasting users internet which may not be necessary so for these reasons we have pagination

- For Pagination we only need 2 things from the frontend , which is page number and items per page ( this may not be required if page size is fixed on the frontend ).

- The query for pagination is :- db.model.find({"query to be executed"}).skip(offset).limit(size)

- so how to calculate offset and size

  - Now if we are on page 1 then we need first 10 results so offset is 0 and size is 10.

  - If we are on page 2 then we need results from 11 to 20 and size is 10.

  - so from above dummy calculation we can formulate our page calculation as :-

  - offset = ( page - 1) * size

  - size = size ( same number that we received from frontend )

- Finally we also need to calculate the totalPages for the query so that frontend can show the next and previous arrows properly, for e.g :- if the user is on last page then they will not show next and if he is on first page then they will not show prev and a lot of other cool things can be done with this totalPages data.

# Pagination query in API:-
```js
http://localhost:5000/users?page=1&limit=10
```
