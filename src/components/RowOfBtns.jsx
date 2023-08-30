import React, { useEffect, useState, useRef } from "react";
import { Howl } from "howler";

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
    const audio = document.getElementById(pressedKey);

    audio && audio.play();
  };

  const clickHandler = (e) => {
    const audio = e.target.children[0].src;
    // console.log(audio);

    var sound = new Howl({
      src: [data.soundLinks[0]],
    });

    sound.play();
  };

  const rewindHandler = () => {
    const audio = document.getElementById(pressedKey);

    audio.currentTime = 0;
  };

  useEffect(() => {
    window.addEventListener(KEY_DOWN, keydownHandler);

    const regEx = data.regEx[0];

    if (regEx.test(pressedKey) && refs[pressedKey]) {
      refs[pressedKey].current.focus();
      playAudioHandler();
    }

    return () => window.removeEventListener(KEY_DOWN, keydownHandler);
  });

  return (
    <div className="row">
      <button className="drum-pad" onClick={clickHandler} ref={refs[keys[0]]}>
        {keys[0]}
        <audio
          src={sounds[0]}
          id={keys[0]}
          onEnded={rewindHandler}
          preload="audio"
        ></audio>
      </button>
      <button className="drum-pad" onClick={clickHandler} ref={refs[keys[1]]}>
        {keys[1]}
        <audio
          src={sounds[1]}
          id={keys[1]}
          onEnded={rewindHandler}
          preload="audio"
        ></audio>
      </button>
      <button className="drum-pad" onClick={clickHandler} ref={refs[keys[2]]}>
        {keys[2]}
        <audio
          src={sounds[2]}
          id={keys[2]}
          onEnded={rewindHandler}
          preload="audio"
        ></audio>
      </button>
    </div>
  );
};

export default RowOfBtns;
