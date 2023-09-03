import React, { useEffect, useState } from "react";

import Display from "./components/Display";
import Volume from "./components/Volume";
import { onKeyPress } from "./funcs/onKeyPress";
import { onKeyUp } from "./funcs/onKeyUp";
import Pads from "./components/Pads";
import "./App.css";

function App() {
  console.log("App renders");

  const [pressedKey, setPressedKey] = useState(null);

  useEffect(() => {
    document.title = "Drum Machine";

    onKeyPress((e) => {
      setPressedKey(e.key);

      console.log(pressedKey);
    });

    onKeyUp(() => {
      setPressedKey(null);
    });
  }, []);

  useEffect(() => {
    if (!pressedKey) return;

    const btn = document.getElementById(pressedKey.toUpperCase());

    btn.click();
  }, [pressedKey]);

  return (
    <div className="App">
      <code>Drum Pad</code>
      <Display />
      <Volume />
      <Pads />
      <footer>
        Development by <em>Hossein Keshtkar</em> <br /> August 2023
      </footer>
    </div>
  );
}

export default App;
