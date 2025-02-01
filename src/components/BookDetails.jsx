import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Get books from Redux store
import "./Book.css";

function BookDetails() {
  const { id } = useParams(); // Get ID from URL
  const books = useSelector((state) => state.books);

  // Convert id to the same type as book.id (number)
  const book = books.find((book) => String(book.id) === id); // Ensure type match

  if (!book) {
    return <h2>Book not found</h2>;
  }

  return (
    <>
      <h1 className="book-details-heading">{"Book Details"}</h1>
      <div className="book-details-container">
        <div className="book-cover-section">
          <Link to="/booklist" className="back-button">
            <p>← Back to Browse Books</p>
          </Link>
          <div className="book-cover-wrapper">
            <img src={book.coverImage} alt={book.title} className="book-cover" />
          </div>
        </div>
        <div className="book-info-section">
          <h2 className="book-info-title">{book.title || "Title Not Available"}</h2>
          <h2><span>Author:</span> {book.author || "Unknown Author"}</h2>
          <h3><span>Description:</span> {book.description || "No description available"}</h3>
          <div className="book-rating">⭐ {book.rating ? `${book.rating} / 5` : "No rating"}</div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
