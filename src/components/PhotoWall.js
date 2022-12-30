import Photo from "./Photo";

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

export default PhotoWall;
