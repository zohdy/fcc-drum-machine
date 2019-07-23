import React, { useEffect, useRef, useState, useCallback } from "react";
import "./DrumPad.css";

function DrumPad({ sampleData, changeSample, volume, power }) {
  const [padActive, setPadActive] = useState(false);
  const audio = useRef(null);
  const button = useRef(null);
  const { trigger, url, keyCode, name } = sampleData;

  const onKeyPress = useCallback(
    (e) => {
      if (keyCode === e.keyCode) {
        e.preventDefault();
        button.current.click();
      }
    },
    [keyCode]
  );

  useEffect(() => {
    window.addEventListener("keyup", onKeyPress);
    return () => {
      window.removeEventListener("keyup", onKeyPress);
    };
  }, [onKeyPress]);

  const handleClick = () => {
    changeSample(sampleData);
    playSample();
  };

  const playSample = () => {
    if (!audio.paused) {
      audio.current.currentTime = 0;
      audio.current.volume = volume;
    }
    audio.current.play();
    toggleActive();
  };

  const toggleActive = () => {
    setTimeout(() => {
      setPadActive(false);
    }, 100);
    setPadActive(true);
  };

  return (
    <div className={`Pad-wrapper ${power ? "on" : "off"}`}>
      <button
        id={name}
        className={`drum-pad ${padActive ? "active" : ""}`}
        onClick={handleClick}
        ref={button}
        disabled={!power}
      >
        <audio
          ref={audio}
          className="clip"
          id={trigger}
          src={url}
          preload="auto"
          disabled={!power}
        />
        {trigger}
      </button>
    </div>
  );
}

export default DrumPad;
