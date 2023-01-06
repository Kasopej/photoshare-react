import { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPost from "./AddPost";
import PostDetails from "./PostDetails";
import { Link, Outlet, Route, Routes } from "react-router-dom";
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
              <h1>
                <Link to="/">PhotoWall</Link>
              </h1>
              <Outlet></Outlet>
            </div>
          ))()}
        >
          <Route
            index
            element={(() => (
              <div>
                <PhotoWall photos={this.props.posts}></PhotoWall>
              </div>
            ))()}
          ></Route>

          <Route path="/addpost" element={<AddPost></AddPost>}></Route>
          <Route path="/viewpost" element={<PostDetails></PostDetails>}></Route>
        </Route>
      </Routes>
    );
  }
}

export default connect(PostsStateToProps)(MainApp);
