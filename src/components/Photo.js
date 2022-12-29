import { Component } from "react";

export default class Photo extends Component {
  render() {
    const { photo } = this.props;
    return (
      <figure className="figure">
        <img
          className="photo"
          src={photo.imageLink}
          alt={photo.description}
        ></img>
        <figcaption>
          <p>{photo.description}</p>
        </figcaption>
        <div className="button-container">
          <button className="remove-button">Remove</button>
        </div>
      </figure>
    );
  }
}
