import React, { useEffect } from "react";

import "./App.css";
import Buttons from "./components/Pad";
import { hiHatData } from "./data/hiHatData";
import { kickData } from "./data/kickData";
import Display from "./components/Display";
import Volume from "./components/Volume";
import Provider from "./manager/Provider";

function App() {
  console.log("App renders");

  useEffect(() => {
    document.title = "Drum Pad";
  }, []);

  return (
    <Provider>
      <div className="App">
        <code>Drum Pad</code>
        <Display state={state} />
        <Volume state={state} dispatch={dispatch} />
        <div id="drum-pad">
          <Buttons data={hiHatData} />
          <Buttons data={kickData} />
        </div>
        <footer>
          Development by <em>Hossein Keshtkar</em> <br /> August 2023
        </footer>
      </div>
    </Provider>
  );
}

export default App;
