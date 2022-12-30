import { Component } from "react";
import Photo from "./Photo";

function PhotoWall(props) {
  const { photos } = props;
  return (
    <section className="photoGrid">
      {photos.map((photo, index) => (
        <Photo photo={photo} key={index}></Photo>
      ))}
    </section>
  );
}

export default PhotoWall;
