const GithubReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload, isLoading: false };
    case "FETCH_USER":
      return { ...state, user: action.payload, isLoading: false };
    case "FETCH_USERS_REPO":
      return { ...state, repo: action.payload, isLoading: false };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "CLEAR_USER_RESULTS":
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default GithubReducer;
