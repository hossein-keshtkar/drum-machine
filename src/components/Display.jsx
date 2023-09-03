import React, { useRef, memo } from "react";
import { useSelector } from "react-redux";

import styles from "../styles/Display.module.css";

const Display = () => {
  const { value } = useSelector((state) => state.display);

  const displayRef = useRef();

  return (
    <div className={styles.container} id="display" ref={displayRef}>
      <h1>{value}</h1>
    </div>
  );
};

export default memo(Display);
