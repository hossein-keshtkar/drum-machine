import React, { useRef } from "react";

import "./App.css";
import Buttons from "./components/Buttons";
import { hiHatData } from "./data/hiHatData";
import { kickData } from "./data/kickData";

function App() {
  const displayRef = useRef();

  return (
    <div className="App">
      <code>Drum Pad</code>
      <div id="display" ref={displayRef}>
        <h1>Hello</h1>
      </div>
      <div id="drum-pad">
        <Buttons data={hiHatData} />
        <Buttons data={kickData} />
      </div>
      <footer>
        Development by <em>Hossein Keshtkar</em> <br /> August 2023
      </footer>
    </div>
  );
}

export default App;
