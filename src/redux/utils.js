export function PostsStateToProps(state) {
  const { posts } = state;
  return { posts };
}

export function CommentsStateToProps(state) {
  const { comments } = state;
  return { comments };
}
