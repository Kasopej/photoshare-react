import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  const { photos, removePost } = props;
  return (
    <div>
      <Link className="addIcon" to="/addphoto"></Link>
      <section className="photoGrid">
        {photos.map((photo, index) => (
          <Photo photo={photo} key={index} removePost={removePost}></Photo>
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
