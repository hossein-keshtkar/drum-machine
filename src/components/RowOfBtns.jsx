import React from "react";

const RowOfBtns = ({ data, clickHandler, rowNum }) => {
  return (
    <div className="row">
      <button className="drum-pad" onClick={clickHandler}>
        {data.keys[rowNum][0]}
        <audio
          src={data.soundLinks[rowNum][0]}
          onEnded={() => {}}
          id={data.keys[rowNum][0]}
        ></audio>
      </button>
      <button className="drum-pad" onClick={clickHandler}>
        {data.keys[rowNum][1]}
        <audio
          src={data.soundLinks[rowNum][1]}
          onEnded={() => {}}
          id={data.keys[rowNum][1]}
        ></audio>
      </button>
      <button className="drum-pad" onClick={clickHandler}>
        {data.keys[rowNum][2]}
        <audio
          src={data.soundLinks[rowNum][0]}
          onEnded={() => {}}
          id={data.keys[rowNum][2]}
        ></audio>
      </button>
    </div>
  );
};

export default RowOfBtns;
