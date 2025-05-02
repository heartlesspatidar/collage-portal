import React from 'react';
import '../css/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-overlay">
        <div className="home-content">
          <h1 className="home-heading">
            WELCOME TO INSTITUTE OF COMPUTER SCIENCE, VIKRAM UNIVERSITY UJJAIN
          </h1>
          <p className="home-mission">
            Our mission is to create future technologists who are capable of managing change and transformation in a globally competitive environment.
          </p>
          <div className="home-button">
            <button className="cta-button">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
