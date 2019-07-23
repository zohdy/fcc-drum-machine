import React, { useState } from "react";
import "./Slider.css";

export default function Slider({ changeVolume, name }) {
  const [value, setValue] = useState(50);
  const handleChange = (e) => {
    setValue(e.target.value);
    changeVolume(e.target.value / 100);
  };
  return (
    <div className="slider-container">
      <p>{name}</p>
      <input
        onChange={handleChange}
        type="range"
        min="1"
        max="100"
        value={value}
        className="slider"
        id="volume"
      />
    </div>
  );
}
