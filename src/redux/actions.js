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
