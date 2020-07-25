import React, { useReducer, createContext } from "react";

const initialState = {
  isOpen: false,
};

function reducer(state, action) {
  if (action.type === "TOGGLE") {
    return { ...state, isOpen: !state.isOpen };
  }

  return state;
}

export const DrawerContext = createContext({});

function DrawerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <DrawerContext.Provider value={{ state, dispatch }}>{children}</DrawerContext.Provider>;
}

export default DrawerProvider;
