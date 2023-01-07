import {
  database,
  ref,
  update,
  onValue,
  remove,
  push,
} from "../firebase_config";

const postsFirebaseReference = ref(database, "posts/");
const commentsFirebaseReference = ref(database, "comments/");
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
      dispatch(fetchPosts(Object.values(snapshot.val())));
      cancelPostsListener();
    });
  };
}

export function startDeletingPost(postId) {
  return (dispatch) => {
    remove(ref(database, "posts/" + postId)).then(() => {
      dispatch(removePost(postId));
    });
  };
}

export function startMakingComment(comment, postId) {
  return (dispatch) => {
    return push(ref(database, "comments/" + postId), comment).then(() => {
      dispatch(makeComment(comment, postId));
    });
  };
}

export function startFetchingComments() {
  return (dispatch) => {
    const cancelCommentsListener = onValue(
      commentsFirebaseReference,
      (snapshot) => {
        const commentsDictionary = snapshot.val();
        for (const key in commentsDictionary) {
          if (Object.hasOwnProperty.call(commentsDictionary, key)) {
            //convert each posts comment record from firebase from an object to an array of comment strings
            commentsDictionary[key] = Object.values(commentsDictionary[key]);
          }
        }
        dispatch(fetchComments(commentsDictionary));
        cancelCommentsListener();
      }
    );
  };
}

export function fetchPosts(posts) {
  return {
    type: "FETCH_POSTS",
    posts,
  };
}

export function fetchComments(commentsDictionary) {
  return {
    type: "FETCH_COMMENTS",
    commentsDictionary,
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

export function makeComment(comment, postId) {
  return {
    type: "MAKE_COMMENT",
    comment,
    postId,
  };
}
