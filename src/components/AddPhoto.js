import { Component } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const withNavigation = (Component) => {
  return (props) => <Component {...props} navigate={useNavigate()} />;
};

class AddPhoto extends Component {
  state = {};
  handleSubmit(event) {
    event.preventDefault();
    const { addPhoto, navigate } = this.props;
    addPhoto({
      imageLink: event.target.elements.link.value,
      description: event.target.elements.description.value,
    });
    navigate(-1);
  }
  render() {
    return (
      <div>
        <h1>Photowall</h1>
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

AddPhoto.propTypes = {
  addPhoto: PropTypes.func.isRequired,
};

export default withNavigation(AddPhoto);
