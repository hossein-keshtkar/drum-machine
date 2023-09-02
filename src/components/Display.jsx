import React, { useRef, memo } from "react";

import "../styles/Display.css";

const Display = () => {
  const displayRef = useRef();
  console.log("Display renders");

  return (
    <div id="display" ref={displayRef}>
      <h1>Display</h1>
    </div>
  );
};

export default memo(Display);
