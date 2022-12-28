import { Component } from "react";
import ListContainer from "./ListContainer";
const tasks = ["Take out trash", "KIll cockroaches", "Pick up laundry"];

class Organizer extends Component {
  render() {
    return <ListContainer tasks={tasks} />;
  }
}

export default Organizer;
