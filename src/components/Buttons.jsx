import React, { useRef, useState } from "react";

import "../styles/Buttons.css";
import RowOfBtns from "./RowOfBtns";

const Buttons = () => {
  const [pressedKey, setPressedKey] = useState("");

  const data = {
    soundLinks: [
      [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      ],
      [
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      ],
      [
        "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      ],
    ],
    instruments: [
      ["Heater 1", "Heater 2", "Heater 3"],
      ["Heater 4", "Clap", "Open HH"],
      ["Kick n' Hat", "Kick", "Closed HH"],
    ],
    keys: [
      ["Q", "W", "E"],
      ["A", "S", "D"],
      ["Z", "X", "C"],
    ],
  };

  const clickHandler = (e) => {
    // refs.display.current.innerHTML = data.instruments[e.target.children[0].id];
    e.target.children[0].play();
    // e.target.className += " clicked";

    // setTimeout(() => {
    //   e.target.className = "drum-pad";
    // }, 100);
  };

  const keydownHandler = (e) => {
    setPressedKey(e.code.replace(/^Key/, ""));
  };

  React.useEffect(() => {
    window.addEventListener("keydown", keydownHandler);

    if (/[QWEASDZXC]/.test(pressedKey)) {
      data.refs[pressedKey].current.click();
      data.refs[pressedKey].current.children[0].play();
    }

    return () => window.removeEventListener("keydown", keydownHandler);
  });

  return (
    <div className="buttons">
      <RowOfBtns data={data} clickHandler={clickHandler} rowNum={0} />
      <RowOfBtns data={data} clickHandler={clickHandler} rowNum={1} />
      <RowOfBtns data={data} clickHandler={clickHandler} rowNum={2} />
    </div>
  );
};

export default Buttons;
