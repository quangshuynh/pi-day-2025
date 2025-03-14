import React, { useState } from 'react';
import './styles/PiSpiralVisualization.css';

const piDigits = "3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034418159813629774771309960518707211349999998372978049951059731732816096318595024459455346908302642522308253344685035261931188171010003137838752886587533208381420617177669147303598253490428755468731159562863882353787593751957781857780532171226806613001927876611195909216420198";

const PiSpiralVisualization = () => {
  const [radiusMultiplier, setRadiusMultiplier] = useState(10);
  const [digitsCount, setDigitsCount] = useState(50);

  const handleRadiusChange = (e) => {
    setRadiusMultiplier(parseFloat(e.target.value));
  };

  const handleDigitsCountChange = (e) => {
    setDigitsCount(parseInt(e.target.value, 10));
  };

  const digitsArray = piDigits.split('').slice(0, digitsCount);
  const spiralDigits = digitsArray.map((digit, index) => {
    const angle = index * 0.5;
    const radius = radiusMultiplier * Math.sqrt(index);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return (
      <div 
        key={index} 
        className="spiral-digit" 
        style={{ 
          left: '50%', 
          top: '50%', 
          transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` 
        }}
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
      <div className="slider-controls">
        <label>
          Radius Multiplier: {radiusMultiplier}
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={radiusMultiplier}
            onChange={handleRadiusChange}
          />
        </label>
        <label>
          Number of Digits: {digitsCount}
          <input
            type="range"
            min="10"
            max={piDigits.length}
            step="1"
            value={digitsCount}
            onChange={handleDigitsCountChange}
          />
        </label>
      </div>
    </div>
  );
};

export default PiSpiralVisualization;
