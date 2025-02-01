import React from "react";
import Card from "./Card";
import Popular from "./Popular";
import "./Resources.css";

const Resources = ({ searchQuery }) => {
  const resources = [
    { title: "Fiction", description: "Explore fiction books", image: "fiction.png" },
    { title: "Non-fiction", description: "Learn from non-fiction", image: "non-fiction.png" },
    { title: "Sci-fi", description: "Discover sci-fi adventures", image: "sci-fi.png" },
    { title: "Romance", description: "Find romantic stories", image: "romance.png" },
    { title: "Fantasy", description: "Find Fantasy stories", image: "fantacy.png" },
    { title: "Mystery", description: "Find Mystery stories", image: "mystery.png" },
  ];

  // Filter resources based on search query
  const filteredResources = resources.filter((resource) =>
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    
    <section className="resources">
      <h2>Our resources</h2>
      <div className="resource-cards">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <Card key={index} title={resource.title} description={resource.description} image={resource.image} />
          ))
        ) : (
          <p>No matching categories found.</p>
        )}
      </div>
    </section>
    <Popular/>
    </>
  );
};

export default Resources;
