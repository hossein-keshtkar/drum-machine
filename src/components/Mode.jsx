import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import styles from "../styles/Mode.module.css";
import { LIGHT } from "../constants/keywords";
import { darkMode, lightMode } from "../manager/modeSlice";

const Mode = () => {
  const { value } = useSelector((state) => state.mode);

  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();

  const style = {
    borderColor: value === LIGHT ? "#000" : "#fff",
  };

  const onClickHandler = () => {
    dispatch(value === LIGHT ? darkMode() : lightMode());
    setIsClicked((prev) => !prev);
  };

  return (
    <div
      onClick={onClickHandler}
      className={styles.container}
      //   style={style}
    >
      <div className={`${styles.btn} ${isClicked ? styles.isClicked : ""}`}>
        {value === LIGHT ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
      </div>
    </div>
  );
};

export default Mode;
