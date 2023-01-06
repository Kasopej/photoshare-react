import Post from "./Post";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  const { posts } = props;
  return (
    <div>
      <Link className="addIcon" to="/addpost"></Link>
      <section className="photoGrid">
        {posts
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <Post post={post} key={post.id}></Post>
          ))}
      </section>
    </div>
  );
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default PhotoWall;
