import { Component } from "react";
import Photo from "./Photo";

class PhotoWall extends Component {
  render() {
    const { photos } = this.props;
    return (
      <section>
        {photos.map((photo, index) => (
          <Photo photo={photo} key={index}></Photo>
        ))}
      </section>
    );
  }
}

export default PhotoWall;
