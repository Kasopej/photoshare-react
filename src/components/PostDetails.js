import { useParams } from "react-router-dom";
import Post from "./Post";
import Comments from "./Comments";
import { useSelector } from "react-redux";

export default function PostDetails(props) {
  const params = useParams();
  let post = useSelector((state) =>
    state.posts.find((post) => post.id === params.id)
  );
  return (
    <div>
      {post ? (
        <div className="single-photo">
          <Post post={post}></Post>
          <Comments postId={params.id}></Comments>
        </div>
      ) : null}
    </div>
  );
}
