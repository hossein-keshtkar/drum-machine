import React, { useRef, memo } from "react";

import "../styles/Display.css";
import { useSelector } from "react-redux";

const Display = () => {
  console.log("Display renders");

  const display = useSelector((state) => state.display);

  const displayRef = useRef();

  return (
    <div id="display" ref={displayRef}>
      <h1>{display.value}</h1>
    </div>
  );
};

export default memo(Display);
