import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import "../App.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <header className="navbar">
      <div className="logo">
        <img src="logo.png" alt="logo" />
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <img src="menu.png" alt="menu" height="25px"/>
      </div>

      {/* Navigation Links */}
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        {/* Close Button */}
        <div className="close-btn" onClick={toggleMenu}>✖</div>
        <ul className="navitems">
        <Link to="/" className="link">
                <li>Home</li>
            </Link>
            <Link to="/booklist" className="link">
                <li>Browse Books</li>
            </Link>
            <Link to="/add-book" className="link">
                <li>Add Book</li>
            </Link>

        </ul>
      </nav>

      {/* Login Button */}
      <div className="user">
        <img src="student.png" alt="logo" height="40px"/>
      </div>
    </header>
  );
};

export default Navbar;
