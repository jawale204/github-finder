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
    console.log(items);

    dispatch({
      type: "FETCH_USER",
      payload: items,
    });
  };

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        dispatch,
        SearchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
