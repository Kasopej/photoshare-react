import { useParams } from "react-router-dom";
import Post from "./Post";
import Comments from "./Comments";
import { useSelector } from "react-redux";

export default function PostDetails(props) {
  const params = useParams();
  const { loading } = props;
  let post = useSelector((state) =>
    state.posts.find((post) => post.id === params.id)
  );
  if (loading) {
    return <div className="loader">...loading</div>;
  }
  return (
    <div>
      {post ? (
        <div className="single-photo">
          <Post post={post}></Post>
          <Comments postId={params.id}></Comments>
        </div>
      ) : (
        <h1 className="not-found">No Post Found</h1>
      )}
    </div>
  );
}
