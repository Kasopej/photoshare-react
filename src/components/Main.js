import { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPost from "./AddPost";
import PostDetails from "./PostDetails";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import { PostsStateToProps } from "../redux/utils";
import { startFetchingPosts, startFetchingComments } from "../redux/actions";

class MainApp extends Component {
  state = { loading: true };

  componentDidMount(prevProps, prevState) {
    const { dispatch } = this.props;
    dispatch(startFetchingPosts()).then(() => {
      console.log("fetch done");
      this.setState({ loading: false });
    });
    dispatch(startFetchingComments());
    console.log("mount", { prevProps, prevState });
  }
  render() {
    const { posts } = this.props;
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
                <PhotoWall posts={posts}></PhotoWall>
              </div>
            ))()}
          ></Route>

          <Route path="/addpost" element={<AddPost></AddPost>}></Route>
          <Route
            path="/viewpost/:id"
            element={<PostDetails loading={this.state.loading}></PostDetails>}
          ></Route>
        </Route>
      </Routes>
    );
  }
}

export default connect(PostsStateToProps)(MainApp);
