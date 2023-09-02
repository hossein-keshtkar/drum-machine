import React, {
  useRef,
  memo,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

import { DISPLAY, KEY_PRESS, KEY_UP } from "../constants/keywords";
import { activeClassHandler } from "../funcs/activeClassHandler";
import { playAudio } from "../funcs/playAudio";
import { keyPressHandler } from "../funcs/keyPressHandler";
import StateContext from "../manager/StateContext";
import DataContext from "../manager/DataContext";
import "../styles/Button.css";

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
    playAudio(audio, volume);
  };

  const dispatchHandler = useCallback(() => {
    dispatch({ type: DISPLAY, payload: instrument });
  }, [pressedKey]);

  const taskHandler = () => {
    dispatchHandler();
    audioHandler();
  };

  useEffect(() => {
    window.addEventListener(KEY_PRESS, (e) =>
      keyPressHandler(e, setPressedKey)
    );

    if (pressedKey && pressedKey.toUpperCase() === key) {
      activeClassHandler(btnRef);
      taskHandler();
      console.log("listener");
    }

    return () => window.removeEventListener(KEY_PRESS, keyPressHandler);
  }, [pressedKey]);

  useEffect(() => {
    window.addEventListener(KEY_UP, () => setPressedKey(""));

    return () => window.removeEventListener(KEY_UP, setPressedKey);
  }, [pressedKey]);

  return (
    <button onClick={taskHandler} className="button" ref={btnRef} id={key}>
      {key}
      <audio src={audio} preload="audio"></audio>
    </button>
  );
};

export default memo(Button);
