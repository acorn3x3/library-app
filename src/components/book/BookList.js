import Book from '../../components/book/Book';
import { useBooks } from '../../hooks/useBooks';
import { Link } from 'react-router-dom';
import Author from '../author/Author';

function BookList() {
  const { error, loading, books } = useBooks();
  if (error)
    return (
      <>
        <h1>Something went wrong :( </h1> <h2>{error}</h2>
      </>
    );
  if (loading) return <h1>Loading books...</h1>;
  return (
    <>
      <h1>Book List</h1>
      <Link to="/">Return to Home</Link>

      <ul className="book-list" aria-label="book list">
        {books.map((book) => (
          <li key={book.book_id}>
            <Link to={`/books/${book.book_id}`}>
              {' '}
              <Book book={book}> </Book>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookList;
