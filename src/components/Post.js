import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { removePost } from "../redux/actions";
import { Link } from "react-router-dom";
import withNavigationHOC from "./utilities/WithNavigationHOC";

class Post extends Component {
  render() {
    const { post, dispatch, navigate } = this.props;
    return (
      <figure className="figure">
        <Link to={`viewpost/${post.id}`}>
          <img
            className="photo"
            src={post.imageLink}
            alt={post.description}
          ></img>
        </Link>
        <figcaption>
          <p>{post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            className="remove-button"
            onClick={() => {
              dispatch(removePost(post.id));
              navigate("/");
            }}
          >
            Remove
          </button>
        </div>
      </figure>
    );
  }
}
Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default withNavigationHOC(connect(null)(Post));
