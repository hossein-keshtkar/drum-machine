import React, { useEffect, useState, useRef, useContext } from "react";

import { DISPLAY, KEY_DOWN } from "../constants/keywords";
import { playAudio } from "../funcs/playAudio";
import { keydownHandler } from "../funcs/keydownHandler";
import "../styles/RowOfBtns.css";
import Context from "../manager/Provider";
import Button from "./Button";

const RowOfBtns = ({ data, rowNum }) => {
  // const [pressedKey, setPressedKey] = useState(null);

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
  
  const btnIds = [0, 1, 2];

  return (
    <div className="row">
      {btnIds.map((id) => (
        <Button id={id} />
      ))}
    </div>
  );
};

export default RowOfBtns;
