import React, { memo } from "react";

import Button from "./Button";
import { v4 } from "uuid";

const Row = ({ rowNum }) => {
  console.log("row renders");

  const columnNumbers = [0, 1, 2];

  return (
    <div>
      {columnNumbers.map((colNum) => (
        <Button colNum={colNum} rowNum={rowNum} key={v4()} />
      ))}
    </div>
  );
};

export default memo(Row);
