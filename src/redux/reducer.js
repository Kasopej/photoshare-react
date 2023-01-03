import { combineReducers } from "redux";

import posts from "../data/posts";
function postsReducer(state = posts, action) {
  return state;
}

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
