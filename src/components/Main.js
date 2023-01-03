import { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { PostsStateToProps } from "../redux/utils";

class MainApp extends Component {
  componentDidMount(prevProps, prevState) {
    console.log("mount", { prevProps, prevState });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updated", { prevProps, prevState });
  }
  componentWillUnmount(nextProps, nextState) {
    console.log("destroying", { nextProps, nextState });
  }
  render() {
    console.log("render");
    return (
      <Routes>
        <Route
          path="/"
          element={(() => (
            <div>
              <Title title="PhotoWall"></Title>
              <PhotoWall
                photos={this.props.posts}
                removePost={this.removePost}
              ></PhotoWall>
            </div>
          ))()}
        ></Route>

        <Route
          path="/addphoto"
          element={(() => (
            <AddPhoto addPhoto={this.addPost}></AddPhoto>
          ))()}
        ></Route>
      </Routes>
    );
  }
}

export default connect(PostsStateToProps)(MainApp);
