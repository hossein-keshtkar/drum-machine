import React, { useRef } from "react";

import "../styles/Display.css";

const Display = () => {
  const displayRef = useRef();

  return (
    <div id="display" ref={displayRef}>
      <h1>Display</h1>
    </div>
  );
};

export default Display;
