import React from "react";

const Button = () => {
  return (
    <button onClick={taskHandler} className="pad" ref={refs[keys[0]]} id="0">
      {keys[0]}
      <audio src={sounds[0]} id={keys[0]} preload="audio"></audio>
    </button>
  );
};

export default Button;
