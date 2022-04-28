import React, { createContext, useEffect, useReducer, useState } from "react";
import { GithubUser } from "../../types/GithubUser";
import { GithubUserDetails } from "../../types/GithubUserDetails";
import { Actions, githubReducer, State } from "./GithubReducer";

interface IGithubContext {
  users: GithubUser[];
  user?: GithubUserDetails;
  loading: boolean;
  fetchUser?: (login: string) => Promise<void>;
  clearUsers?: () => void;
  clearUser?: () => void;
}

export const initialState: State = {
  users: [],
  user: undefined,
  loading: true,
};

const GithubContext = createContext<IGithubContext>(initialState);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(githubReducer, initialState);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({ type: Actions.setUsers, payload: data });
    dispatch({ type: Actions.setLoading, payload: false });
  };

  const fetchUser = async (login: string) => {
    dispatch({ type: Actions.setLoading, payload: true });

    const response = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({ type: Actions.setUser, payload: data });
    dispatch({ type: Actions.setLoading, payload: false });
  };

  const clearUsers = () => {
    dispatch({ type: Actions.setUsers, payload: [] });
  };

  const clearUser = () => {
    dispatch({ type: Actions.setUser, payload: undefined });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        fetchUser,
        clearUsers,
        clearUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
