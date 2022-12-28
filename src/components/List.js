import { Component } from "react";

export default class List extends Component {
  render() {
    const { task } = this.props;
    return <li>{task.toUpperCase()}</li>;
  }
}
