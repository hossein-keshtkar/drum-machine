import React, { useEffect, useState, useRef } from "react";
import { Howl } from "howler";

import { KEY_DOWN } from "../constants/keywords";
import kick from "../assets/Alchemist Kick 1.wav";
import kick2 from "../assets/Alchemist Kick 2.wav";

const RowOfBtns = ({
  data: { keys, soundLinks, instruments, regEx },
  rowNum,
}) => {
  const [pressedKey, setPressedKey] = useState("");

  const myKeys = [keys[rowNum][0], keys[rowNum][1], keys[rowNum][2]];

  const refs = {
    [myKeys[0]]: useRef(),
    [myKeys[1]]: useRef(),
    [myKeys[2]]: useRef(),
  };

  const sounds = [
    soundLinks[rowNum][0],
    soundLinks[rowNum][1],
    soundLinks[rowNum][2],
  ];

  const myInstruments = [
    instruments[rowNum][0],
    instruments[rowNum][1],
    instruments[rowNum][2],
  ];

  const keydownHandler = (e) => {
    const regEx = /^Key/;
    setPressedKey(e.code.replace(regEx, ""));
  };

  const playAudioHandler = () => {
    const audio = document.getElementById(pressedKey);

    // audio.play();

    const sound = new Howl({
      src: [kick],
      volume: 1,
      onend: () => {
        setPressedKey("");
      },
    });

    sound.play();
  };

  const rewindHandler = () => {
    const audio = document.getElementById(pressedKey);

    audio.currentTime = 0;
    setPressedKey("");
  };

  useEffect(() => {
    window.addEventListener(KEY_DOWN, keydownHandler);

    if (regEx[0].test(pressedKey) && refs[pressedKey]) {
      refs[pressedKey].current.focus();
      playAudioHandler();
    }

    return () => window.removeEventListener(KEY_DOWN, keydownHandler);
  });

  return (
    <div className="row">
      <button
        className="drum-pad"
        onClick={playAudioHandler}
        ref={refs[myKeys[0]]}
      >
        {myKeys[0]}
        <audio
          src={sounds[0]}
          id={myKeys[0]}
          onEnded={rewindHandler}
          preload="audio"
        ></audio>
      </button>
      <button
        className="drum-pad"
        onClick={playAudioHandler}
        ref={refs[myKeys[1]]}
      >
        {myKeys[1]}
        <audio
          src={sounds[1]}
          id={myKeys[1]}
          onEnded={rewindHandler}
          preload="audio"
        ></audio>
      </button>
      <button
        className="drum-pad"
        onClick={playAudioHandler}
        ref={refs[myKeys[2]]}
      >
        {myKeys[2]}
        <audio
          src={sounds[2]}
          id={myKeys[2]}
          onEnded={rewindHandler}
          preload="audio"
        ></audio>
      </button>
    </div>
  );
};

export default RowOfBtns;
