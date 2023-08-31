import React from "react";

import "../styles/Buttons.css";
import RowOfBtns from "./RowOfBtns";

const Buttons = ({ data }) => {
  return (
    <div className="buttons">
      <RowOfBtns data={data} rowNum={0} />
      <RowOfBtns data={data} rowNum={1} />
      <RowOfBtns data={data} rowNum={2} />
    </div>
  );
};

export default Buttons;
