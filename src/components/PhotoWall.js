import Photo from "./Photo";
import PropTypes from "prop-types";

function PhotoWall(props) {
  const { photos, removePost } = props;
  return (
    <section className="photoGrid">
      {photos.map((photo, index) => (
        <Photo photo={photo} key={index} removePost={removePost}></Photo>
      ))}
    </section>
  );
}

PhotoWall.propTypes = {
  photos: PropTypes.array.isRequired,
  removePost: PropTypes.func.isRequired,
};
export default PhotoWall;
