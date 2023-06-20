import React, { useState } from 'react';
import './style.css';
const ColorPicker = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColorList(false);
  };

  return (
    <div className="color-picker">
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: selectedColor }}
      >
        Pick a color
      </button>
      {showColorList && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></li>
          ))}
        </ul>
      )}
      {/* {selectedColor && <p>You picked: {selectedColor}</p>} */}
    </div>
  );
};

export default ColorPicker;
