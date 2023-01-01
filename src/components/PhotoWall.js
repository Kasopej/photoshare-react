import Photo from "./Photo";
import PropTypes from "prop-types";

function PhotoWall(props) {
  const { photos, removePost, changePage } = props;
  return (
    <div>
      <button className="addIcon" onClick={() => changePage()}></button>
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
  changePage: PropTypes.func.isRequired,
};
export default PhotoWall;
