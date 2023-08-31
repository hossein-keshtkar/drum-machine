import React from "react";

import "../styles/Volume.css";

const Volume = ({state: volume}) => {
  return (
    <div className="volume">
      <label htmlFor="range">Volume</label>
      <input
        value={volume}
        type="range"
        name="volume"
        id="range"
        max={1}
        min={0}
      />
    </div>
  );
};

export default Volume;
