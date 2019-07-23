import React, { useState } from "react";
import DrumPad from "./components/DrumPad";
import Display from "./components/Display";
import Slider from "./components/Slider";
import SwitchButton from "./components/SwitchButton";
import "./App.css";
import { soundbanks } from "./data/sounds";

export default function App() {
  const [bank, setBank] = useState(soundbanks("bank 1"));
  const [volume, setVolume] = useState(0.5);
  const [power, setPower] = useState(true);
  const [display, setDisplay] = useState("Ready...");

  const changeSample = (sampleData) => {
    changeDisplay(sampleData.name);
  };

  const changeVolume = (volume) => {
    setVolume(volume);
  };

  const changeBank = (val) => {
    setBank(soundbanks(val));
    changeDisplay(val);
  };

  const changePower = (val) => {
    setPower(val);
    changeDisplay("Ready...");
  };

  const changeDisplay = (val) => {
    setDisplay(val);
  };

  return (
    <div id="drum-machine">
      <h1>
        <span>PPZ</span> Drums
      </h1>
      <div className="controls">
        <SwitchButton id={"bank"} name={"Bank"} changeBank={changeBank} />
        <Slider id={"volume"} name={"Volume"} changeVolume={changeVolume} />
        <SwitchButton id={"power"} name={"Power"} changePower={changePower} />
      </div>
      <Display display={display} power={power} />
      <div className="wrapper">
        {bank.map((sampleData) => {
          return (
            <DrumPad
              power={power}
              volume={volume}
              key={sampleData.name}
              sampleData={sampleData}
              changeSample={changeSample}
            />
          );
        })}
      </div>
    </div>
  );
}
