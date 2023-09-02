import React, { useRef, memo, useContext } from "react";

import "../styles/Display.css";
import Context from "../manager/StateContext";

const Display = () => {
  console.log("Display renders");

  const {
    state: { display },
  } = useContext(Context);

  const displayRef = useRef();

  return (
    <div id="display" ref={displayRef}>
      <h1>{display}</h1>
    </div>
  );
};

export default memo(Display);
