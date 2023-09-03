import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Display from "./components/Display";
import Volume from "./components/Volume";
import { onKeyPress } from "./funcs/onKeyPress";
import { onKeyUp } from "./funcs/onKeyUp";
import Pads from "./components/Pads";
import { APP_NAME, LIGHT, RANGE } from "./constants/keywords";
import { regEx } from "./data/keyboardKeys";
import styles from "./styles/App.module.css";
import Mode from "./components/Mode";

function App() {
  const [pressedKey, setPressedKey] = useState(null);
  const mode = useSelector((state) => state.mode);

  const className = `${styles.app} ${
    mode.value === LIGHT ? styles.light : styles.dark
  }`;

  useEffect(() => {
    document.title = APP_NAME;

    onKeyPress((e) => {
      document.getElementById(RANGE).blur();

      if (regEx.test(e.key)) setPressedKey(e.key);
    });

    onKeyUp(() => {
      setPressedKey(null);
    });
  }, []);

  useEffect(() => {
    if (!pressedKey) return;

    document.getElementById(pressedKey.toUpperCase()).click();
  }, [pressedKey]);

  return (
    <div className={className}>
      <code>{APP_NAME}</code>
      <Mode />
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
