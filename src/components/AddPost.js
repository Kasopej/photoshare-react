import { Component } from "react";
import { connect } from "react-redux";
import { startAddingPost } from "../redux/actions";
import withNavigationHOC from "./utilities/WithNavigationHOC";

class AddPhoto extends Component {
  state = {};
  handleSubmit(event) {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(
      startAddingPost({
        id: String(new Date().valueOf()),
        imageLink: event.target.elements.link.value,
        description: event.target.elements.description.value,
      })
    );
    event.target.elements.link.value = null;
    event.target.elements.description.value = null;
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
