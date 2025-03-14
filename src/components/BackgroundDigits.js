import React from "react";
import "./styles/BackgroundDigits.css";

const piDigits =
  "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679";

const BackgroundDigits = () => {
  return (
    <div className="background-digits">
      {piDigits.split("").map((digit, index) => (
        <span key={index} className="pi-digit">
          {digit}
        </span>
      ))}
    </div>
  );
};

export default BackgroundDigits;