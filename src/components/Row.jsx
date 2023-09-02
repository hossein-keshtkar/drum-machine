import React from "react";

import Button from "./Button";
import {idGenerator} from '../funcs/idGenerator'

const Row = ({ rowNum }) => {
  console.log("row renders");

  const columnNumbers = [0, 1, 2];


  return (
    <div>
      {columnNumbers.map((colNum ) => (
        <Button colNum={colNum} rowNum={rowNum} key={idGenerator} />
      ))}
    </div>
  );
};

export default Row;
