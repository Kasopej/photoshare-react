import { combineReducers } from "redux";

import posts from "../data/posts";
function postsReducer(state = posts, action) {
  switch (action.type) {
    case "ADD_POST":
      console.log({ action_index: action.index });
      break;

    default:
      break;
  }
  return state;
}

const rootReducer = combineReducers({
  posts: postsReducer,
});

export default rootReducer;
