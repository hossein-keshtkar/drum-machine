import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initState } from "../data/initState";

export const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
