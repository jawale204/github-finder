const GithubReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return { ...state, users: action.payload, isLoading: false };
    case "FETCH_USER_AND_REPO":
      return {
        ...state,
        user: action.payload.user,
        repo: action.payload.repos,
        isLoading: false,
      };
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "CLEAR_USER_RESULTS":
      return { ...state, users: [] };
    default:
      return state;
  }
};

export default GithubReducer;
