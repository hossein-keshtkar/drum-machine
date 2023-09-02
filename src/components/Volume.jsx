import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateVolume } from "../manager/volumeSlice";
import "../styles/Volume.css";

const Volume = () => {
  console.log("Volume renders");

  const dispatch = useDispatch();

  const { volume } = useSelector((state) => state);

  const [rangeValue, setRengeValue] = useState(volume.value);

  const changeHandler = useCallback(
    (e) => {
      const value = e.target.value;

      setRengeValue(value);

      dispatch(updateVolume(rangeValue));
    },
    [rangeValue]
  );

  return (
    <div className="volume">
      <label htmlFor="range">Volume</label>
      <input
        onChange={changeHandler}
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

export default Volume;
