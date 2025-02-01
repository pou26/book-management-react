import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ title, description, image }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/booklist/${title.toLowerCase()}`); // Redirect to category-based book list
  };

  return (
    <div className="card" onClick={handleCategoryClick} style={{ cursor: "pointer" }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
