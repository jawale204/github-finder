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

  const setLoading = () => dispatch({ type: "SET_LOADING" });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        user: state.user,
        repo: state.repo,
        dispatch,
        setLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
