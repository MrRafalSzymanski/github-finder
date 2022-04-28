import React, { createContext, useReducer } from "react";
import { Actions, AlertReducer, AlertState, AlertType } from "./AlertReducer";

interface IAlertContext {
  alert?: AlertState;
  setAlert?: (msg: string, type: AlertType) => void;
}

export const AlertContext = createContext<IAlertContext>({});

const initialState: AlertState = {};

export const AlertProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const setAlert = (msg: string, type: AlertType) => {
    dispatch({ type: Actions.setAlert, payload: { msg, type } });

    setTimeout(() => dispatch({ type: Actions.clearAlert }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
