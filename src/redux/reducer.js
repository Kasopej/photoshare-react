import { combineReducers } from "redux";

function postsReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_POSTS":
      return [...action.posts];
    case "ADD_POST":
      return [...state, action.post];
    case "REMOVE_POST":
      return state.filter((post) => post.id !== action.index);
    default:
      break;
  }
  return state;
}

function commentsReducer(state = {}, action) {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return {
        ...action.commentsDictionary,
      };
    case "MAKE_COMMENT":
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
