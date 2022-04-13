const GithubReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, users: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default GithubReducer;
