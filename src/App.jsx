import React, { useEffect, useReducer, useState } from "react";

import Display from "./components/Display";
import Volume from "./components/Volume";
import { reducer } from "./manager/reducer";
import { initState } from "./data/initState";
import StateContext from "./manager/StateContext";
import { onKeyPress } from "./funcs/onKeyPress";
import { onKeyUp } from "./funcs/onKeyUp";
import Pads from "./components/Pads";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const [state, dispatch] = useReducer(reducer, initState);
  const [pressedKey, setPressedKey] = useState(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Drum Machine";

    onKeyPress((e) => {
      setPressedKey(e.key);
    });

    onKeyUp(() => {
      setPressedKey(null);
    });

    console.log(state);
  }, []);

  useEffect(() => {
    console.log(pressedKey);
  }, [pressedKey]);

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
