import { useState } from "react";
import { api } from "./api/config/axiosConfig";

// In a galaxy, far, far away (when we had no typing)

type Books = unknown; // We don't have any clue what is the type!

function getBooks() {
  // NO type hints, what's the url of books ?
  return api.get("/books");
}

export function BooksWithoutTyping() {
  const [books, setBooks] = useState<Books[]>();

  function handleLoad() {
    getBooks().then((response) => {
      console.log(response);
      setBooks(response.data["hydra:member"]);
    });
  }

  if (!books) {
    return <button onClick={handleLoad}>Load books without any typing</button>;
  }

  // Soooo we map our books, but what's the shape of it?
  // console.log and discover it ourself!
  return (
    <ul>
      <li>{books[0].title}</li>
      <li>{books[1].title}</li>
      <li>{books[2].title}</li>
    </ul>
  );
}
