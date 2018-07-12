import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_LOADING,
  FETCH_POSTS_ERROR
} from '../actions';

const initialState = {
  isLoading: false,
  hasError: false,
  data: {},
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_LOADING:
      return {isLoading: true, hasError: false, data: {}};
    case FETCH_POSTS_SUCCESS:
      return {isLoading: false, hasError: false, data: action.payload};
    case FETCH_POSTS_ERROR:
      return {isLoading: false, hasError: true, data: {}}
    default:
      return state;
  }
}

export default postsReducer;