import React, { useRef, memo, useEffect } from "react";

// import { DISPLAY, KEY_DOWN } from "../constants/keywords";
// import { playAudio } from "../funcs/playAudio";
// import { keydownHandler } from "../funcs/keydownHandler";
import "../styles/Button.css";

const Button = ({ audio, id, key }) => {
  // const [pressedKey, setPressedKey] = useState(null);
  
  console.log("button renders");

  const btnRef = useRef();
  //   const dispatchDisplay = (e) => {
  //     if (e) {
  //       dispatch({ type: DISPLAY, payload: myInstruments[e.target.id] });
  //     } else {
  //       dispatch({
  //         type: DISPLAY,
  //         payload: myInstruments[refs[pressedKey].current.id],
  //       });
  //     }
  //   };

  //   const audioHandler = (e) => {
  //     if (e) {
  //       const audio = e.target.children[0].src;

  //       playAudio(audio, volume, setPressedKey);
  //     } else {
  //       const audio = document.getElementById(pressedKey).src;

  //       playAudio(audio, volume, setPressedKey);
  //     }
  //   };

  const taskHandler = (e) => {
    // dispatchDisplay(e);
    // audioHandler(e);
  };

  //   useEffect(() => {
  //     window.addEventListener(KEY_DOWN, (e) => keydownHandler(e, setPressedKey));

  //     if (data.regEx[0].test(pressedKey) && refs[pressedKey]) {
  //       refs[pressedKey].current.classList.add("active");

  //       setTimeout(() => {
  //         refs[pressedKey].current.classList.remove("active");
  //       }, 200);

  //       audioHandler();
  //     }

  //     return () => window.removeEventListener(KEY_DOWN, keydownHandler);
  //   });

  return (
    <button onClick={taskHandler} className="button" ref={btnRef} id={id}>
      {key}
      <audio src={audio} id={key} preload="audio"></audio>
    </button>
  );
};

export default memo(Button);
