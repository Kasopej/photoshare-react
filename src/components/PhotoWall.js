import Post from "./Post";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  const { photos } = props;
  return (
    <div>
      <Link className="addIcon" to="/addpost"></Link>
      <section className="photoGrid">
        {photos
          .sort((a, b) => b.id - a.id)
          .map((photo) => (
            <Post photo={photo} key={photo.id}></Post>
          ))}
      </section>
    </div>
  );
}

PhotoWall.propTypes = {
  photos: PropTypes.array.isRequired,
};
export default PhotoWall;
