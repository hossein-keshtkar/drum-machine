import React, { useEffect, useReducer } from "react";

import "./App.css";
import Buttons from "./components/Pad";
import { hiHatData } from "./data/hiHatData";
import { kickData } from "./data/kickData";
import Display from "./components/Display";
import Volume from "./components/Volume";
import { reducer } from "./manager/reducer";
import { initState } from "./data/initState";
import Context from "./manager/Context";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    document.title = "Drum Pad";
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>
      <div className="App">
        <code>Drum Pad</code>
        <Display />
        <Volume />
        <div id="drum-pad">
          <Buttons data={hiHatData} />
          <Buttons data={kickData} />
        </div>
        <footer>
          &copy;Development by <em>Hossein Keshtkar</em> <br /> August 2023
        </footer>
      </div>
    </Context.Provider>
  );
}

export default App;
