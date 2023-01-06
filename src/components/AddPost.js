import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../redux/actions";
import withNavigationHOC from "./utilities/WithNavigationHOC";

class AddPhoto extends Component {
  state = {};
  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(
      addPost({
        id: null,
        imageLink: event.target.elements.link.value,
        description: event.target.elements.description.value,
      })
    );
  }
  render() {
    return (
      <div>
        <section>
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" placeholder="link" name="link" />
            <input type="text" placeholder="description" name="description" />
            <button type="submit">Post</button>
          </form>
        </section>
      </div>
    );
  }
}

export default withNavigationHOC(connect(null)(AddPhoto));
