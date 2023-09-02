import React, {
  useRef,
  memo,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

import { DISPLAY, KEY_DOWN } from "../constants/keywords";
import { playAudio } from "../funcs/playAudio";
import { keydownHandler } from "../funcs/keydownHandler";
import "../styles/Button.css";
import StateContext from "../manager/StateContext";
import DataContext from "../manager/DataContext";

const Button = ({ padNum, rowNum, colNum }) => {
  const {
    state: { volume },
    dispatch,
  } = useContext(StateContext);
  const [pressedKey, setPressedKey] = useState(null);
  const data = useContext(DataContext)[padNum][0];

  const instrument = data.instruments[rowNum][colNum];
  const audio = data.soundLinks[rowNum][colNum];
  const key = data.keys[rowNum][colNum];

  console.log("button renders");

  const btnRef = useRef();

  const audioHandler = () => {
    playAudio(audio, volume, setPressedKey);
  };

  const dispatchHandler = () => {
    dispatch({ type: DISPLAY, payload: instrument });
  };

  const taskHandler = () => {
    dispatchHandler();
    audioHandler();
  };

  useMemo(() => {
    window.addEventListener(KEY_DOWN, (e) => keydownHandler(e, setPressedKey));

    if (pressedKey && pressedKey.toUpperCase() === key) {
      btnRef.current.classList.add("active");

      setTimeout(() => {
        btnRef.current.classList.remove("active");
      }, 200);

      taskHandler();
    }

    return () => window.removeEventListener(KEY_DOWN, keydownHandler);
  }, [pressedKey]);

  return (
    <button onClick={taskHandler} className="button" ref={btnRef} id={key}>
      {key}
      <audio src={audio} preload="audio"></audio>
    </button>
  );
};

export default memo(Button);
