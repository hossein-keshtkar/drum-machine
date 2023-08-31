import React, { useRef } from "react";

import "../styles/Display.css";

const Display = ({ state: { display } }) => {
  const displayRef = useRef();

  return (
    <div id="display" ref={displayRef}>
      <h1>{display}</h1>
    </div>
  );
};

export default Display;
