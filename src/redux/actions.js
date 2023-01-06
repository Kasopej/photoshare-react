import { database, ref, update, onValue, off } from "../firebase_config";

const postsFirebaseReference = ref(database, "posts/");
export function startAddingPost(post) {
  return (dispatch) => {
    return update(ref(database, "posts/" + post.id), post).then(() => {
      dispatch(addPost(post));
    });
  };
}

export function startFetchingPosts() {
  return (dispatch) => {
    const cancelPostsListener = onValue(postsFirebaseReference, (snapshot) => {
      dispatch(fetchPost(Object.values(snapshot.val())));
      cancelPostsListener();
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
