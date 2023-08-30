import React, { useEffect, useState, useRef } from "react";
import { KEY_DOWN } from "../constants/keywords";

const RowOfBtns = ({ data, rowNum }) => {
  const [pressedKey, setPressedKey] = useState("");

  const keys = [
    data.keys[rowNum][0],
    data.keys[rowNum][1],
    data.keys[rowNum][2],
  ];

  const refs = {
    [keys[0]]: useRef(),
    [keys[1]]: useRef(),
    [keys[2]]: useRef(),
  };

  const sounds = [
    data.soundLinks[rowNum][0],
    data.soundLinks[rowNum][1],
    data.soundLinks[rowNum][2],
  ];

  const instruments = [
    data.instruments[rowNum][0],
    data.instruments[rowNum][1],
    data.instruments[rowNum][2],
  ];

  const keydownHandler = (e) => {
    const regEx = /^Key/;
    setPressedKey(e.code.replace(regEx, ""));
  };

  const playAudioHandler = () => {
    refs[pressedKey].current.click();
    refs[pressedKey].current.children[0].play();
  };

  const clickHandler = (e) => {
    // refs.display.current.innerHTML = data.instruments[e.target.children[0].id];
    e.target.children[0].play();
    // e.target.className += " clicked";

    // setTimeout(() => {
    //   e.target.className = "drum-pad";
    // }, 100);
  };

  const rewindHandler = (e) => {
    console.log(e);
  };

  useEffect(() => {
    window.addEventListener(KEY_DOWN, keydownHandler);

    const regEx = /[QWEASDZXC]/;

    if (regEx.test(pressedKey) && refs[pressedKey]) {
      playAudioHandler();
    }

    return () => window.removeEventListener(KEY_DOWN, keydownHandler);
  });

  return (
    <div className="row">
      <button className="drum-pad" onClick={clickHandler} ref={refs[keys[0]]}>
        {keys[0]}
        <audio src={sounds[0]} id={keys[0]} onEnded={rewindHandler}></audio>
      </button>
      <button className="drum-pad" onClick={clickHandler} ref={refs[keys[1]]}>
        {keys[1]}
        <audio src={sounds[1]} id={keys[1]}></audio>
      </button>
      <button className="drum-pad" onClick={clickHandler} ref={refs[keys[2]]}>
        {keys[2]}
        <audio src={sounds[2]} id={keys[2]}></audio>
      </button>
    </div>
  );
};

export default RowOfBtns;
