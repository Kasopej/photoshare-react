import { database, ref, update, onValue } from "../firebase_config";

export function startAddingPost(post) {
  return (dispatch) => {
    return update(ref(database, "posts/" + post.id), post).then(() => {
      dispatch(addPost(post));
    });
  };
}

export function startFetchingPosts() {
  return (dispatch) => {
    return onValue(ref(database, "posts/"), (snapshot) => {
      dispatch(fetchPost(Object.values(snapshot.val())));
    });
  };
}

export function fetchPost(posts) {
  return {
    type: "FETCH_POSTS",
    posts,
  };
}

export function addPost(post) {
  return {
    type: "ADD_POST",
    post,
  };
}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index,
  };
}

export function makePost(comment, postId) {
  return {
    type: "MAKE_POST",
    comment,
    postId,
  };
}
