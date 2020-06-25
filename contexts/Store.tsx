import React, { useReducer, createContext } from "react";
import { Dark } from "../consts/Dark";

/** initial state */
const initialState: any = {
  theme: Dark,
};

export enum EAction {
  CHANGE_THEME,
}

export interface IAction {
  payload: any;
  type: string;
}

/** create and export the store */
export const Store = createContext(initialState);

/** reducer */
const reducer = (state: any, action: IAction) => {
  console.log("action", action);
  switch (action.type) {
    case 'CHANGE_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

/** create the store provider */
export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
