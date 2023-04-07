import { useState } from "react";
import { BookAPI } from "./api";
import { BooksDTO } from "./api/types";

export function BooksWithTyping() {
  const [books, setBooks] = useState<BooksDTO[]>();

  async function handleLoad() {
    const response = await BookAPI.getAll();
    setBooks(response);
  }

  if (!books) {
    return <button onClick={handleLoad}>Load books with typing</button>;
  }

  return (
    <ul>
      <li>{books[0].title}</li>
      <li>{books[1].title}</li>
      <li>{books[2].title}</li>
    </ul>
  );
}
