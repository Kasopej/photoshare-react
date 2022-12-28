import { Component } from "react";
import List from "./List";
export default class ListContainer extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <ol>
        {tasks.map((task, index) => (
          <List task={task} key={index}></List>
        ))}
      </ol>
    );
  }
}
