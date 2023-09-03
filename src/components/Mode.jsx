import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import styles from "../styles/Mode.module.css";
import { LIGHT } from "../constants/keywords";
import { darkMode, lightMode } from "../manager/modeSlice";

const Mode = () => {
  console.log("Mode renders");
  const { value } = useSelector((state) => state.mode);

  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();

  const className = `${styles.btn} ${isClicked ? styles.isClicked : ""}`;

  const onClickHandler = () => {
    dispatch(value === LIGHT ? darkMode() : lightMode());
    setIsClicked((prev) => !prev);
  };

  return (
    <div onClick={onClickHandler} className={styles.container}>
      <div className={className}>
        {value === LIGHT ? (
          <BsFillSunFill size={12} />
        ) : (
          <BsFillMoonStarsFill size={10} />
        )}
      </div>
    </div>
  );
};

export default memo(Mode);
