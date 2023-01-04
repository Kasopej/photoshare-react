import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removePost } from "../redux/actions";

class Photo extends Component {
  render() {
    const { photo, dispatch } = this.props;
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
          <button
            className="remove-button"
            onClick={() => dispatch(removePost(photo.id))}
          >
            Remove
          </button>
        </div>
      </figure>
    );
  }
}
Photo.propTypes = {
  photo: PropTypes.object.isRequired,
};

export default connect(null)(Photo);
