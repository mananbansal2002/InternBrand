import React, { useState } from 'react';

const Slider = ({ min, max, defaultValue, step, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  const renderMarkers = () => {
    const numberOfMarkers = (max - min) / step + 1;
    const stepPercentage = 100 / (numberOfMarkers - 1);

    const markers = [];
    for (let i = 0; i < numberOfMarkers; i++) {
      const markerValue = min + step * i;
      const isDurationMarker = markerValue === min; // Check if it's the duration marker
      const position = isDurationMarker ? 0 : (markerValue - min) / (max - min) * 100; // Adjust position for duration marker

      markers.push(
        <span
          key={i}
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: `${position}%`,
            transform: 'translateX(-50%)',
            textAlign: 'center',
            fontSize: '12px',
            color: 'gray', // Adjust color here
          }}
        >
          {markerValue}
        </span>
      );
    }

    return markers;
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
        style={{
          width: '100%',
          height: '4px',
          borderRadius: '4px',
          appearance: 'none',
          outline: 'none',
          margin: '10px 0',
          background: `linear-gradient(to right, rgb(147 51 234) ${value / (max - min) * 100}%, lightgray ${value / (max - min) * 100}% 100%)`, // Adjust colors here
        }}
      />
      {renderMarkers()}
    </div>
  );
};

export default Slider;
