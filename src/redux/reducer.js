import { combineReducers } from "redux";

import posts from "../data/posts";
function postsReducer(state = posts, action) {
  switch (action.type) {
    case "ADD_POST":
      action.post.id = String(new Date().valueOf());
      return [...state, action.post];
    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.index);
    default:
      break;
  }
  return state;
}

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
