import {
  GET_DATA_REQUESTED,
  GET_DATA_SUCCEED,
  GET_DATA_FAILED,
} from "../../constants/actionTypes";

export const initialPostsState = {
  posts: [],
  error: null,
  isFetching: false,
};

export const posts = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_DATA_REQUESTED:
      return {
        ...state,
        isFetching: true,
      };

    case GET_DATA_SUCCEED:
      return {
        ...state,
        isFetching: false,
        posts: action.payload.data,
      };

    case GET_DATA_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };

    default:
      return { ...state };
  }
};
