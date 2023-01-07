import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { startDeletingPost } from "../redux/actions";
import { CommentsStateToProps } from "../redux/utils";
import { Link } from "react-router-dom";
import withNavigationHOC from "./utilities/WithNavigationHOC";

class Post extends Component {
  render() {
    const { post, comments, dispatch, navigate } = this.props;
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
              dispatch(startDeletingPost(post.id));
              navigate("/");
            }}
          >
            Remove
          </button>
          <Link className="button" to={`viewpost/${post.id}`}>
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {comments[post.id]?.length ?? 0}
            </div>
          </Link>
        </div>
      </figure>
    );
  }
}
Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default withNavigationHOC(connect(CommentsStateToProps)(Post));
