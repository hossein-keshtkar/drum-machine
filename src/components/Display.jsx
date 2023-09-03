import React, { useRef, memo } from "react";
import { useSelector } from "react-redux";

import "../styles/Display.css";

const Display = () => {
  console.log("Display renders");

  const { value } = useSelector((state) => state.display);

  const displayRef = useRef();

  return (
    <div id="display" ref={displayRef}>
      <h1>{value}</h1>
    </div>
  );
};

export default memo(Display);
