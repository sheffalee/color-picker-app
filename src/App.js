import React from 'react';
import ColorPicker from './components/colorPicker';
import './components/style.css';
const App = () => {
  const colors = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#ff00ff',
    '#00ffff',
    '#800080',
    '#ffa500',
  ];

  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
