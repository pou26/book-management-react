import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import "./AddBook.css";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const genresList = ["Sci-Fi", "Romance", "Fiction", "Non-Fiction", "Fantasy", "Mystery"];

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    coverImage: null,
  });

  const [successMessage, setSuccessMessage] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleGenreChange = (e) => {
    setBook({ ...book, genre: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileUrl = URL.createObjectURL(selectedFile);
      setBook({ ...book, coverImage: fileUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      _id: Date.now(),
      title: book.title,
      author: book.author,
      categories: [book.genre],
      description: book.description,
      coverImage: book.coverImage,
      status: "PUBLISH",
    };

    dispatch(addBook(newBook));

    // Show success message
    setSuccessMessage(true);

    // Auto redirect after 3 seconds
    setTimeout(() => {
      navigate("/booklist");
    }, 3000);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Add a Book</h2>
        <p>Fill in the form below to add a new book to your collection.</p>

        {/* Success Message UI */}

        {successMessage && (
          <div className="success-message">
            <img src="success.gif" alt="Success" className="success-icon" />
            <p>Book added successfully!</p>
            <button onClick={() => navigate("/booklist")} className="browse-btn">
              Browse Books
            </button>
          </div>
        )}

        {!successMessage && (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title <span>*</span></label>
              <input type="text" name="title" placeholder="Enter book title" value={book.title} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Author <span>*</span></label>
              <input type="text" name="author" placeholder="Enter author name" value={book.author} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Genre <span>*</span></label>
              <div className="genre-list">
                {genresList.map((genre, index) => (
                  <label key={index} className="genre-item">
                    <input type="radio" name="genre" value={genre} checked={book.genre === genre} onChange={handleGenreChange} />
                    {genre}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea name="description" placeholder="Enter a brief description of the book" value={book.description} onChange={handleChange} rows="4"></textarea>
            </div>

            <div className="form-group">
              <label>Cover Image <span>*</span></label>
              <input type="file" accept="image/*" name="coverImage" onChange={handleFileChange} required />
              {book.coverImage && <img src={book.coverImage} alt="Book Cover" className="cover-preview" />}
            </div>

            <div className="form-group">
              <button type="submit" className="add-btn">Add Book</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddBook;
