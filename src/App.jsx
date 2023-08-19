import React from "react";

import "./App.css";

function App() {
  const [pressedKey, setPressedKey] = React.useState("");
  const display = React.useRef();
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

  const keydownHandler = (e) => {
    setPressedKey(e.code.replace(/^Key/, ""));
  };

  React.useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
  });

  React.useEffect(() => {
    if (/[QWEASDZXC]/.test(pressedKey))
      display.current.innerHTML = instruments[pressedKey];
  }, [pressedKey]);

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display" ref={display}></div>
        <div className="row">
          <button className="drum-pad">
            Q
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              id="Q"
            ></audio>
          </button>
          <button className="drum-pad">
            W
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              id="W"
            ></audio>
          </button>
          <button className="drum-pad">
            E
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              id="E"
            ></audio>
          </button>
        </div>
        <div className="row">
          <button className="drum-pad">
            A
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              id="A"
            ></audio>
          </button>
          <button className="drum-pad">
            S
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              id="S"
            ></audio>
          </button>
          <button className="drum-pad">
            D
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              id="D"
            ></audio>
          </button>
        </div>
        <div className="row">
          <button className="drum-pad">
            Z
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              id="Z"
            ></audio>
          </button>
          <button className="drum-pad">
            X
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              id="X"
            ></audio>
          </button>
          <button className="drum-pad">
            C
            <audio
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              id="C"
            ></audio>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
