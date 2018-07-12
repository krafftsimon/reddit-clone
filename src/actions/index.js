import axios from 'axios';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_LOADING = 'FETCH_POSTS_LOADING';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';

export function fetchPostsSuccess(data) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  }
}

export function fetchPostsLoading() {
  return {
    type: FETCH_POSTS_LOADING,
  }
}

export function fetchPostsError() {
  return {
    type: FETCH_POSTS_ERROR,
  }
}

export function fetchPosts(sortingCriterion) {
  const url = `${APIURL}/posts/${sortingCriterion}`
  return dispatch => {
    dispatch(fetchPostsLoading());
    axios.get(url)
      .then(res => {
        dispatch(fetchPostsSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchPostsLoading(err));
      });
  };
}