import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { initState } from "../data/initState";

const Context = createContext();

const [state, dispatch] = useReducer(reducer, initState);

const Provider = ({ children }) => (
  <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
);

export default Provider;
