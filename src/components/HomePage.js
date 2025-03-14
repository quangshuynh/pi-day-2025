import React, { useState, useEffect } from 'react';
import './styles/HomePage.css';

const piFacts = [
  "Pi is an irrational number",
  "Pi has been calculated to over one trillion digits",
  "Pi Day is celebrated on March 14th (3/14)",
  "Pi is used in formulas for circles, spheres, and cylinders",
  "Pi is an infinite, non-repeating decimal"
];

const HomePage = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prevIndex) => (prevIndex + 1) % piFacts.length);
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
