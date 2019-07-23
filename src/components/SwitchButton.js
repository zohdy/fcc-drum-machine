import React from "react";
import "./SwitchButton.css";

export default function SwitchButton({ changeBank, changePower, name, id }) {
  const handleChange = (e) => {
    if (id === "bank") {
      const bank = e.target.checked ? "bank 2" : "bank 1";
      changeBank(bank);
    } else if (id === "power") {
      changePower(!e.target.checked);
    }
  };
  return (
    <div className="SwitchButton-wrapper">
      <p>{name}</p>
      <label className="SwitchButton">
        <input type="checkbox" id={id} onChange={handleChange} />
        <div className={`SwitchButton-slider ${id}`} />
      </label>
    </div>
  );
}
