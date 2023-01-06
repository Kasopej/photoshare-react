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

function commentsReducer(state = [], action) {
  switch (action.type) {
    case "MAKE_POST":
      return {
        ...state,
        [action.postId]: [...(state[action.postId] ?? []), action.comment],
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
