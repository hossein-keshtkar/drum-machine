import React from "react";

import Row from "./Row";

const Pad = () => {
  console.log("pad renders");
  
  const rowNumbers = [0, 1, 2];

  return (
    <div>
      {rowNumbers.map((rowNum, index) => (
        <Row key={index} rowNum={rowNum} />
      ))}
    </div>
  );
};

export default Pad;
