import React, { useEffect, useState, useRef } from "react";

import { KEY_DOWN } from "../constants/keywords";
import { playAudio } from "../funcs/playAudio";
import { keydownHandler } from "../funcs/keydownHandler";

const RowOfBtns = ({ data, rowNum }) => {
  const [pressedKey, setPressedKey] = useState(null);

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

  const myInstruments = [
    data.instruments[rowNum][0],
    data.instruments[rowNum][1],
    data.instruments[rowNum][2],
  ];

  const audioHandler = (e) => {
    if (e) {
      const audio = e.target.children[0].src;

      playAudio(audio, 1, setPressedKey);
    } else {
      const audio = document.getElementById(pressedKey).src;

      playAudio(audio, 1, setPressedKey);
    }
  };

  useEffect(() => {
    window.addEventListener(KEY_DOWN, (e) => keydownHandler(e, setPressedKey));

    if (data.regEx[0].test(pressedKey) && refs[pressedKey]) {
      audioHandler();
    }

    return () => window.removeEventListener(KEY_DOWN, keydownHandler);
  });

  return (
    <div className="row">
      <button
        className="drum-pad"
        onClick={audioHandler}
        // ref={refs[keys[0]]}
      >
        {keys[0]}
        <audio src={sounds[0]} id={keys[0]} preload="audio"></audio>
      </button>
      <button
        className="drum-pad"
        onClick={audioHandler}
        // ref={refs[keys[1]]}
      >
        {keys[1]}
        <audio src={sounds[1]} id={keys[1]} preload="audio"></audio>
      </button>
      <button
        className="drum-pad"
        onClick={audioHandler}
        // ref={refs[keys[2]]}
      >
        {keys[2]}
        <audio src={sounds[2]} id={keys[2]} preload="audio"></audio>
      </button>
    </div>
  );
};

export default RowOfBtns;
