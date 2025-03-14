import React from 'react';
import './styles/PiSpiralVisualization.css';

const piDigits = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

const PiSpiralVisualization = () => {
  const digitsArray = piDigits.split('');
  const spiralDigits = digitsArray.map((digit, index) => {
    const angle = index * 0.5; 
    const radius = 5 * Math.sqrt(index);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return (
      <div 
        key={index} 
        className="spiral-digit" 
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        {digit}
      </div>
    );
  });

  return (
    <div className="pi-spiral-container">
      <h2>Pi Spiral Visualization</h2>
      <div className="spiral">
        {spiralDigits}
      </div>
    </div>
  );
};

export default PiSpiralVisualization;
