import React, { useEffect, useReducer } from "react";

import Display from "./components/Display";
import Volume from "./components/Volume";
import { reducer } from "./manager/reducer";
import { initState } from "./data/initState";
import StateContext from "./manager/StateContext";
import Pads from "./components/Pads";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    document.title = "Drum Machine";
  }, []);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <code>Drum Pad</code>
        <Display />
        <Volume />
        <Pads />
        <footer>
          Development by <em>Hossein Keshtkar</em> <br /> August 2023
        </footer>
      </div>
    </StateContext.Provider>
  );
}

export default App;
