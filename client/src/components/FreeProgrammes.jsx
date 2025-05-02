import React from 'react';
import '../css//FreeProgrammes.css';

const FreeProgrammes = () => {
  return (
    <div className="free-programmes-container">
      <h1 className="free-programmes-title">Free Programmes</h1>
      <p className="free-programmes-description">
        ICS offers Free Certificate Courses to all students who take admission in PG, PG Diploma, or UG Programmes during semesters.
      </p>

      <div className="programme-list">
        <div className="programme-card">
          <h2 className="programme-heading">With PG Programmes</h2>
          <ul className="programme-items">
            <li>Certificate Course in C and C++ Programming Languages</li>
            <li>Certificate Course in Python Programming Language</li>
            <li>Certificate Course in PHP Programming Language</li>
          </ul>
        </div>

        <div className="programme-card">
          <h2 className="programme-heading">With PG Diploma Programmes</h2>
          <ul className="programme-items">
            <li>Certificate Course in C and C++ Programming Languages</li>
            <li>Certificate Course in PHP Programming Language</li>
          </ul>
        </div>

        <div className="programme-card">
          <h2 className="programme-heading">With UG Programmes</h2>
          <ul className="programme-items">
            <li>Certificate Course in C and C++ Programming Languages</li>
            <li>Certificate Course in HTML and JavaScript Programming Language</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FreeProgrammes;
