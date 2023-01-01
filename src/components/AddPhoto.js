import React, { Component } from "react";

class AddPhoto extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Photowall</h1>
        <section>
          <form className="form">
            <input type="text" placeholder="title" />
            <input type="text" placeholder="title" />
          </form>
        </section>
      </div>
    );
  }
}

export default AddPhoto;
