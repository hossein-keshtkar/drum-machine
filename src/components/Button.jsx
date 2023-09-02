import React, {
  useRef,
  memo,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import { activeClassHandler } from "../funcs/activeClassHandler";
import { playAudio } from "../funcs/playAudio";
import { keyPressHandler } from "../funcs/keyPressHandler";
import StateContext from "../manager/StateContext";
import DataContext from "../manager/DataContext";
import "../styles/Button.css";
import { debounce } from "../funcs/debounce";
import { DISPLAY } from "../constants/keywords";

const Button = ({ padNum, rowNum, colNum }) => {
  const {
    state: { volume },
    dispatch,
  } = useContext(StateContext);

  const data = useContext(DataContext)[padNum][0];
  const instrument = data.instruments[rowNum][colNum];
  const audio = data.soundLinks[rowNum][colNum];
  const key = data.keys[rowNum][colNum];

  console.log("button renders");

  const btnRef = useRef();

  const audioHandler = () => {
    playAudio(audio, volume);
  };

  const dispatchHandler = () => {
    dispatch({ type: DISPLAY, payload: instrument });
  };

  const taskHandler = () => {
    activeClassHandler(btnRef);
    dispatchHandler();
    audioHandler();
  };

  return (
    <button onClick={taskHandler} className="button" ref={btnRef} id={key}>
      {key}
      <audio src={audio} preload="auto"></audio>
    </button>
  );
};

export default memo(Button);
