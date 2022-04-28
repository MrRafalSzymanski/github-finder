import { GithubUser } from "../../types/GithubUser";
import { GithubUserDetails } from "../../types/GithubUserDetails";

export interface State {
  users: GithubUser[];
  user?: GithubUserDetails;
  loading: boolean;
}

export enum Actions {
  setUsers = "SET_USERS",
  setUser = "SET_USER",
  setLoading = "SET_LOADING",
}

export interface Action {
  type: Actions;
  payload?: any;
}

export const githubReducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case Actions.setUsers: {
      return {
        ...state,
        users: payload,
      };
    }
    case Actions.setUser: {
      return {
        ...state,
        user: payload,
      };
    }
    case Actions.setLoading: {
      return {
        ...state,
        loading: payload,
      };
    }
    default:
      return state;
  }
};
