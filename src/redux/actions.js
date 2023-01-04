export function addPost(index) {
  return {
    type: "ADD_POST",
    index,
  };
}

export function removePost(index) {
  return {
    type: "REMOVE_POST",
    index,
  };
}
