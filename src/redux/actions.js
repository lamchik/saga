import {CREATE_POST, FETCH_POSTS, SHOW_LOADER, HIDE_LOADER, REQUEST_POSTS} from "./types";

export function createPost(post) {
  return{
    type: CREATE_POST,
    payload: post
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  }
  // return async dispatch => {
  //   dispatch(showLoader())
  //   const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  //   const json = await response.json()
  //   console.log(json)
  //   dispatch({type: FETCH_POSTS, payload: json})
  //   dispatch(hideLoader())
  // }
}