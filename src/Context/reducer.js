export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        isLoading: false,
        posts: action.payload.posts,
      };

    case "IS_LOADING":
      return {
        ...state,
        isLading: false,
      };
    default:
      return { ...state };
  }
};
