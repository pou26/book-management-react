import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import "./Book.css";

const Popular = () => {
  const books = useSelector((state) => state.books).slice(0, 4); // Limit to 4 books

  return (
    <>
    <h1 className="popular-heading">Our Popular Books</h1>
    <div className="bookList">
      {books.length > 0 ? (
        books.map((book) => <Book key={book.id} bookDetails={book} />)
      ) : (
        <p>No books found.</p>
      )}
    </div>
    </>
  );
};

export default Popular;
