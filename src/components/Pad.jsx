import React, { memo } from "react";
import { v4 } from "uuid";

import Row from "./Row";

const Pad = () => {
  console.log("pad renders");

  const rowNumbers = [0, 1, 2];

  return (
    <div>
      {rowNumbers.map((rowNum) => (
        <Row key={v4()} rowNum={rowNum} />
      ))}
    </div>
  );
};

export default memo(Pad);
