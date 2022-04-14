import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //only for testing purpose
  const SearchUsers = async (text) => {
    const param = new URLSearchParams({
      q: text,
    });
    setLoading();

    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?${param}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
        },
      }
    );

    const { items } = await res.json();

    dispatch({
      type: "FETCH_USERS",
      payload: items,
    });
  };

  //get User
  const getUser = async (login) => {
    setLoading();

    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
        },
      }
    );
    if (res.status === 404) {
      window.location.href = "./notfound";
    } else {
      const data = await res.json();

      dispatch({
        type: "FETCH_USER",
        payload: data,
      });
    }
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        user: state.user,
        dispatch,
        SearchUsers,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
