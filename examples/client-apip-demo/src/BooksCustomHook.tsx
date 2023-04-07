import { BookAPI } from "./api";
import { useApi } from "./api/hooks/useApi";

export function BooksCustomHook() {
  const { data, isLoading } = useApi();

  async function handleLoad() {
    const response = await BookAPI.getAll();
    setBooks(response);
  }

  if (!books) {
    return <button onClick={handleLoad}>Load books with custom hook</button>;
  }

  return (
    <ul>
      <li>{books[0].title}</li>
      <li>{books[1].title}</li>
      <li>{books[2].title}</li>
    </ul>
  );
}
