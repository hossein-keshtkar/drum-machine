import React, { useEffect, useState, useRef, useContext } from "react";

import "../styles/RowOfBtns.css";
import Context from "../manager/Context";
import Button from "./Button";

const RowOfBtns = ({ data, rowNum }) => {
  // const {
  //   state: { volume },
  //   dispatch,
  // } = useContext(Context);

  // const keys = [
  //   data.keys[rowNum][0],
  //   data.keys[rowNum][1],
  //   data.keys[rowNum][2],
  // ];

  // const refs = {
  //   [keys[0]]: useRef(),
  //   [keys[1]]: useRef(),
  //   [keys[2]]: useRef(),
  // };

  // const sounds = [
  //   data.soundLinks[rowNum][0],
  //   data.soundLinks[rowNum][1],
  //   data.soundLinks[rowNum][2],
  // ];

  // const myInstruments = [
  //   data.instruments[rowNum][0],
  //   data.instruments[rowNum][1],
  //   data.instruments[rowNum][2],
  // ];

  return (
    <div className="row">
      <Button />
      <Button />
      <Button />
    </div>
  );
};

export default RowOfBtns;
