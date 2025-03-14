import React, { useState, useEffect } from 'react';
import './styles/LivePiCounter.css';

const piDigits = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

const LivePiCounter = () => {
  const [visibleDigits, setVisibleDigits] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      if (index > piDigits.length) {
        clearInterval(interval);
      } else {
        setVisibleDigits(piDigits.substring(0, index));
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-pi-counter">
      <h2>Live Pi Counter</h2>
      <p>{visibleDigits}</p>
    </div>
  );
};

export default LivePiCounter;
