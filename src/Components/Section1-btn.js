import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CircleButtons = () => {
  const [selectedColor, setSelectedColor] = useState('');

  const colors = [
    'linear-gradient(to left, #ff0000, #ff8000)',
    'linear-gradient(to left, #0000ff, #0080ff , #ff0000)',
    'linear-gradient(to left, #00ff00, #80ff00 , #00ff00)',
    'linear-gradient(to left, #ffff00, #ffff80)',
    'linear-gradient(to left, #ffed00, #2b2710 ,#ffff00)',
  ];

  const handleButtonClick = (color) => {
    document.body.style.background = color;
    setSelectedColor(color);
  };

  return (
    <div >
      {colors.map((color, index) => (
        <button
          key={index}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            margin: '10px',
            backgroundImage: color,
            backgroundSize: 'cover',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={() => handleButtonClick(color)}
        >
          
        </button>
      ))}
      
    </div>
  );
};

export default CircleButtons;
