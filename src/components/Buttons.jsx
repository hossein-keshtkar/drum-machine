import React, { useRef, useState } from "react";

import "../styles/Buttons.css";

const Buttons = () => {
  const [pressedKey, setPressedKey] = useState("");

  const instruments = {
    Q: "Heater-1",
    W: "Heater-2",
    E: "Heater-3",
    A: "Heater-4",
    S: "Clap",
    D: "Open-HH",
    Z: "Kick-n'-Hat",
    X: "Kick",
    C: "Closed-HH",
  };

  const refs = {
    display: useRef(),
    Q: useRef(),
    W: useRef(),
    E: useRef(),
    A: useRef(),
    S: useRef(),
    D: useRef(),
    Z: useRef(),
    X: useRef(),
    C: useRef(),
  };

  const clickHandle = (e) => {
    refs.display.current.innerHTML = instruments[e.target.children[0].id];
    e.target.children[0].play();
    e.target.className += " clicked";

    setTimeout(() => {
      e.target.className = "drum-pad";
    }, 100);
  };

  const keydownHandler = (e) => {
    setPressedKey(e.code.replace(/^Key/, ""));
  };

  React.useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    if (/[QWEASDZXC]/.test(pressedKey)) {
      //   refs.display.current.innerHTML = instruments[pressedKey];
      refs[pressedKey].current.click();
      refs[pressedKey].current.children[0].play();
    }

    return () => window.removeEventListener("keydown", keydownHandler);
  });

  return (
    <div className="buttons">
      <div className="row">
        <button className="drum-pad" ref={refs.Q} onClick={clickHandle}>
          Q
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            onEnded={() => {}}
            id="Q"
          ></audio>
        </button>
        <button className="drum-pad" ref={refs.W} onClick={clickHandle}>
          W
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            onEnded={() => {}}
            id="W"
          ></audio>
        </button>
        <button className="drum-pad" ref={refs.E} onClick={clickHandle}>
          E
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            onEnded={() => {}}
            id="E"
          ></audio>
        </button>
      </div>
      <div className="row">
        <button className="drum-pad" ref={refs.A} onClick={clickHandle}>
          A
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            onEnded={() => {}}
            id="A"
          ></audio>
        </button>
        <button className="drum-pad" ref={refs.S} onClick={clickHandle}>
          S
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            onEnded={() => {}}
            id="S"
          ></audio>
        </button>
        <button className="drum-pad" ref={refs.D} onClick={clickHandle}>
          D
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            onEnded={() => {}}
            id="D"
          ></audio>
        </button>
      </div>
      <div className="row">
        <button className="drum-pad" ref={refs.Z} onClick={clickHandle}>
          Z
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            onEnded={() => {}}
            id="Z"
          ></audio>
        </button>
        <button className="drum-pad" ref={refs.X} onClick={clickHandle}>
          X
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            onEnded={() => {}}
            id="X"
          ></audio>
        </button>
        <button className="drum-pad" ref={refs.C} onClick={clickHandle}>
          C
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            onEnded={() => {}}
            id="C"
          ></audio>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
