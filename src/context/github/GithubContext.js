import { createContext, useReducer } from "react";
import { createRenderer } from "react-dom/test-utils";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    isLoading: false,
    repo: [],
    user: {},
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //repo search
  const SearchUsersRepo = async (login) => {
    setLoading();

    const param = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos?${param}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
        },
      }
    );

    const data = await res.json();

    dispatch({
      type: "FETCH_USERS_REPO",
      payload: data,
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
        repo: state.repo,
        dispatch,
        getUser,
        SearchUsersRepo,
        setLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
