import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateVolume } from "../manager/volumeSlice";
import "../styles/Volume.css";

const Volume = () => {
  console.log("Volume renders");

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
    <div className="volume">
      <label htmlFor="range">Volume</label>
      <input
        onBlur={handleDispatch}
        onTouchEnd={handleDispatch}
        onChange={handleOnChange}
        value={rangeValue}
        type="range"
        name="volume"
        id="range"
        max={100}
        min={0}
      />
    </div>
  );
};

export default memo(Volume);
