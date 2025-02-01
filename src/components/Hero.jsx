import React, { useState } from "react";
import "./Hero.css";
import "../App.css";
import Resources from "./Resources";
import Search from "./Search";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <section className="hero">
        
        <div className="hero-content">
          <div className="content">
            <h1>Today's research, tomorrow's innovation</h1>
            <p>Accelerating research discovery to shape a better future</p>
          </div>
          <div className="search-wrap">
          <Search filterFunction={setSearchQuery}/>
          </div>
        </div>

        <div className="hero-image">
          <img src="hero.png" alt="Hero Illustration" />
        </div>
      </section>
    
      {/* Pass search query to Resources */}

      <Resources searchQuery={searchQuery} />

    </>
  );
};

export default Hero;
