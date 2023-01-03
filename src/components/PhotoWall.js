import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  const { photos, removePost } = props;
  return (
    <div>
      <Link className="addIcon" to="/addphoto"></Link>
      <section className="photoGrid">
        {photos
          .sort((a, b) => b.id - a.id)
          .map((photo) => (
            <Photo photo={photo} key={photo.id} removePost={removePost}></Photo>
          ))}
      </section>
    </div>
  );
}

PhotoWall.propTypes = {
  photos: PropTypes.array.isRequired,
  removePost: PropTypes.func.isRequired,
};
export default PhotoWall;
