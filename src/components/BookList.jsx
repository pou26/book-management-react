import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Search from "./Search";
import Book from "./Book";
import "./Book.css";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const [allBooks, setAllBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { category } = useParams(); // Get category from URL

  useEffect(() => {
    let filtered = books;

    if (category) {
      filtered = books.filter((book) =>
        book.categories.some((cat) => cat.toLowerCase() === category.toLowerCase())
      );
    }

    setAllBooks(filtered);
    setFilteredBooks(filtered);
  }, [category, books]);

  const filterSearchList = (searchText) => {
    if (!searchText) {
      setFilteredBooks(allBooks);
      return;
    }

    const filtered = allBooks.filter((book) => {
      const title = book.title?.toLowerCase() || "";
      const author = book.author?.toLowerCase() || "";
      return title.includes(searchText.toLowerCase()) || author.includes(searchText.toLowerCase());
    });

    setFilteredBooks(filtered);
  };

  return (
    <>
      {/* Search filters books*/}
      <Search filterFunction={filterSearchList} />
      <Link to="/add-book">
        <button className="add-book-btn">Add a New Book</button>
      </Link>
      <div className="bookList">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <Book key={book.id} bookDetails={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </>
  );
};

export default BookList;
