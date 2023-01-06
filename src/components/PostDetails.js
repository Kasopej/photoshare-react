import { useParams } from "react-router-dom";
import Post from "./Post";
import Comments from "./Comments";

export default function PostDetails(props) {
  const params = useParams();
  const { posts } = props;
  const post = posts.find((post) => post.id === params.id);
  return (
    <div className="single-photo">
      <Post post={post}></Post>
      <Comments postId={params.id}></Comments>
    </div>
  );
}
