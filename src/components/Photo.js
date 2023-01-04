import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../redux/actions";

class Photo extends Component {
  render() {
    const { photo, addPost } = this.props;
    addPost(1);
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
          <button className="remove-button" onClick={() => null}>
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

const mapDispatchToProps = {
  addPost,
};
export default connect(null, mapDispatchToProps)(Photo);
