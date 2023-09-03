import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateVolume } from "../manager/volumeSlice";
import styles from "../styles/Volume.module.css";
import { RANGE } from "../constants/keywords";

const Volume = () => {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => state.volume);

  const [rangeValue, setRangeValue] = useState(value);

  const handleOnChange = (e) => {
    setRangeValue(+e.target.value);
  };

  const handleDispatch = () => {
    dispatch(updateVolume(rangeValue));
  };

  return (
    <div className={styles.volume}>
      <label htmlFor="range">Volume</label>
      <input
        onBlur={handleDispatch}
        onTouchEnd={handleDispatch}
        onChange={handleOnChange}
        value={rangeValue}
        type="range"
        name="volume"
        id={RANGE}
        max={100}
        min={0}
      />
    </div>
  );
};

export default memo(Volume);
