import React from "react";
import "./Display.css";

const Display = ({ power, display }) => {
  return (
    <div id="display" className={`Display ${power ? "on" : "off"}`}>
      <span>{power ? display : ""}</span>
    </div>
  );
};

export default Display;
