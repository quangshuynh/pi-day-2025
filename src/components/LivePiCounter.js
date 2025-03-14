import React, { useState, useEffect, useRef } from 'react';
import './styles/LivePiCounter.css';

const piDigits = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

const LivePiCounter = () => {
  const [index, setIndex] = useState(0);
  const directionRef = useRef(1); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => {
        let newIndex = prevIndex + directionRef.current;
        if (newIndex >= piDigits.length) {
          directionRef.current = -1;
          newIndex = piDigits.length;
        } else if (newIndex <= 0) {
          directionRef.current = 1;
          newIndex = 0;
        }
        return newIndex;
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-pi-counter">
      <h2>Live Pi Counter (100 Digits)</h2>
      <p>{piDigits.substring(0, index)}</p>
    </div>
  );
};

export default LivePiCounter;
