# How to consume api platform demo

- GET a list of books with any type (we don't know what we get)

So at this point we have litteraly no clue on what we get from the api. We fetch the `/books` endpoint and then what ? Best way is to console.log the response and build up a type manually. Buuuuuuuut how do we know the exact shape of the object we get ? Is this property accept null? Can it be undefined? And this empty array, we must type `any[]` ? Not ideal

Remembers that for ages we didn't any types in Javascript, so it just a new problem we created with Typescript :D from `lol no need to type` to `TYPE EVERYTHING!`.

- GET a list of books with type we enter type manually

- GET a list of books with custom hook to handle data, errors and loading



- GET a lsit of books AND validate it with zod


```sh
http --verify=no -b https://demo.api-platform.com/books

```
