import React, { memo } from "react";
import { v4 } from "uuid";

import Row from "./Row";

const Pad = ({ padNum }) => {
  console.log("pad renders");

  const rowNumbers = [0, 1, 2];

  return (
    <div>
      {rowNumbers.map((rowNum) => (
        <Row key={v4()} padNum={padNum} rowNum={rowNum} />
      ))}
    </div>
  );
};

export default memo(Pad);
