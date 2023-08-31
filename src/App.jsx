import React, { useRef } from "react";

import "./App.css";
import Buttons from "./components/Buttons";
import { hiHatData } from "./data/hiHatData";
import { kickData } from "./data/kickData";

function App() {
  // const displayRef = useRef();

  return (
    <div className="App">
      <div id="drum-machine">
        {/* <div id="display" ref={displayRef}></div> */}
        <Buttons data={hiHatData} />
        <Buttons data={kickData} />
      </div>
    </div>
  );
}

export default App;
