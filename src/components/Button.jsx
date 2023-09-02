import React, { useRef } from "react";

import "../styles/Button.css";

const Button = ({ audio, id, key }) => {
  console.log("button renders");

  const btnRef = useRef();

  const taskHandler = () => {};

  return (
    <button onClick={taskHandler} className="button" ref={btnRef} id={id}>
      {key}
      <audio src={audio} id={key} preload="audio"></audio>
    </button>
  );
};

export default React.memo(Button);
