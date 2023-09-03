import React, { memo } from "react";
import { v4 } from "uuid";

import Pad from "./Pad";
import DataContext from "../manager/DataContext";
import { mainData } from "../data/mainData";
import styles from "../styles/Pads.module.css";

const Pads = () => {
  const padNums = [0, 1];

  return (
    <DataContext.Provider value={mainData}>
      <div className={styles.container}>
        {padNums.map((padNum) => (
          <Pad padNum={padNum} key={v4()} />
        ))}
      </div>
    </DataContext.Provider>
  );
};

export default memo(Pads);
