import React, { useRef } from "react";

import "./App.css";
import Buttons from "./components/Buttons";

function App() {
  const displayRef = useRef();

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display" ref={displayRef}></div>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
