import React, { useState, useEffect } from 'react';
import './styles/HomePage.css';

const piFacts = [
  "Pi is an irrational number",
  "Pi has been calculated to over one trillion digits",
  "Pi Day is celebrated on March 14th (3/14)",
  "Pi is used in formulas for circles, spheres, and cylinders",
  "Pi is an infinite, non-repeating decimal",
  "Archimedes of Syracuse was the first to approximate Pi using inscribed polygons",
  "The symbol π was first used by Welsh mathematician William Jones in 1706",
  "Ludolph van Ceulen spent his life calculating Pi to 35 decimal places",
  "The ancient Babylonians and Egyptians had their own approximations for Pi",
  "The Chudnovsky brothers set a record computing billions of digits of Pi"
];

const HomePage = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex(prevIndex => {
        let newIndex = prevIndex;
        while (newIndex === prevIndex && piFacts.length > 1) {
          newIndex = Math.floor(Math.random() * piFacts.length);
        }
        return newIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="pi-symbol">π</div>
      <div className="pi-fact">
        {piFacts[currentFactIndex]}
      </div>
    </div>
  );
};

export default HomePage;
