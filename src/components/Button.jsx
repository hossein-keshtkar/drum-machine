import React, { useRef, memo, useContext, useCallback } from "react";

import { activeClassHandler } from "../funcs/activeClassHandler";
import { playAudio } from "../funcs/playAudio";
import DataContext from "../manager/DataContext";
import "../styles/Button.css";
import { useDispatch, useSelector } from "react-redux";
import { displayInstrument } from "../manager/displaySlice";

const Button = ({ padNum, rowNum, colNum }) => {
  console.log("button renders");

  const dispatch = useDispatch();

  const { value } = useSelector((state) => state.volume);

  const data = useContext(DataContext)[padNum][0];
  const instrument = data.instruments[rowNum][colNum];
  const audio = data.soundLinks[rowNum][colNum];
  const key = data.keys[rowNum][colNum];

  console.log("button renders");

  const btnRef = useRef();

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
  }, [value, instrument]);

  return (
    <button onClick={taskHandler} className="button" ref={btnRef} id={key}>
      {key}
      <audio src={audio} preload="auto"></audio>
    </button>
  );
};

export default memo(Button);
