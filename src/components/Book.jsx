import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import "./Book.css";
import { Link } from "react-router-dom";

function Book({ bookDetails }) {
  if (!bookDetails) {
    return <p>Invalid book data</p>;
  }

  const { title, author, categories, coverImage } = bookDetails;
  const bookRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  //book blurring effect
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after it appears
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (bookRef.current) {
      observer.observe(bookRef.current);
    }

    return () => {
      if (bookRef.current) {
        observer.unobserve(bookRef.current);
      }
    };
  }, []);

  return (
    <div className={`book-card ${isVisible ? "fade-in" : ""}`} ref={bookRef}>
      <div className="book-cover-container">
        <img src={coverImage} alt={title} className="book-cover" />
      </div>

      <div className="book-details">
        <h2 className="book-title">{title || "Title Not Available"}</h2>
        <p className="book-author">
          <strong>Author:</strong> {author || "Author Unknown"}
        </p>

        <h3 className="book-category">
        <strong>Genre:</strong>{" "}
        {Array.isArray(categories) && categories.length > 0
        ? categories.join(", ")
        : "Unknown"}
        </h3>

        <Link to={`/book/${bookDetails.id}`}>
          <button className="view-details-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default Book;
