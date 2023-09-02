import React, { memo } from "react";

import Button from "./Button";
import { v4 } from "uuid";

const Row = ({ padNum, rowNum }) => {
  console.log("row renders");

  const columnNumbers = [0, 1, 2];

  return (
    <div>
      {columnNumbers.map((colNum) => (
        <Button key={v4()} padNum={padNum} rowNum={rowNum} colNum={colNum} />
      ))}
    </div>
  );
};

export default memo(Row);
