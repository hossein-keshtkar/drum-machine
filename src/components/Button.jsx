import React, { useRef, memo, useContext, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { activeClassHandler } from "../funcs/activeClassHandler";
import { displayInstrument } from "../manager/displaySlice";
import { playAudio } from "../funcs/playAudio";
import DataContext from "../manager/DataContext";
import "../styles/Button.css";

const Button = ({ padNum, rowNum, colNum }) => {
  console.log("button renders");

  const { value } = useSelector((state) => state.volume);
  const dispatch = useDispatch();
  const btnRef = useRef();

  const data = useContext(DataContext)[padNum][0];
  const instrument = data.instruments[rowNum][colNum];
  const audio = data.soundLinks[rowNum][colNum];
  const key = data.keys[rowNum][colNum];

  const audioHandler = () => {
    playAudio(audio, value / 100);
  };

  const dispatchHandler = () => {
    dispatch(displayInstrument(instrument));
  };

  const taskHandler = useCallback(() => {
    activeClassHandler(btnRef);
    dispatchHandler();
    audioHandler();
  }, [value]);

  return (
    <button onClick={taskHandler} className="button" ref={btnRef} id={key}>
      {key}
      <audio src={audio} preload="auto"></audio>
    </button>
  );
};

export default memo(Button);
