export interface AlertState {
  msg?: string;
  type?: AlertType;
}

export type AlertType = "user" | "server" | "none";

export enum Actions {
  setAlert = "SET_ALERT",
  clearAlert = "CLEAR_ALERT",
}

interface Action {
  type: Actions;
  payload?: AlertState;
}

const noAlert: AlertState = {
  msg: "",
  type: "none",
};

export const AlertReducer = (state: AlertState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case Actions.setAlert: {
      return { ...payload };
    }
    case Actions.clearAlert: {
      return { ...noAlert };
    }
    default: {
      return state;
    }
  }
};
