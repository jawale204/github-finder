import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //only for testing purpose
  const fetchUsers = async () => {
    setLoading();
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
      },
    });

    const usersData = await res.json();

    dispatch({
      type: "FETCH_USER",
      payload: usersData,
    });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{ users: state.users, isLoading: state.isLoading }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
