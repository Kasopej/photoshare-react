import { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route, Routes } from "react-router-dom";

export default class MainApp extends Component {
  constructor(props) {
    super(props);
    console.log("create");
    this.state = {
      posts: [],
    };
    this.removePost = this.removePost.bind(this);
    this.addPost = this.addPost.bind(this);
  }
  componentDidMount(prevProps, prevState) {
    console.log("mount", { prevProps, prevState });
    setTimeout(async () => {
      this.setState({
        posts: await getPhotos(),
      });
    }, 1500);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("updated", { prevProps, prevState });
  }
  componentWillUnmount(nextProps, nextState) {
    console.log("destroying", { nextProps, nextState });
  }
  addPost(post) {
    this.state.posts.push(post);
    this.setState({
      posts: this.state.posts,
    });
  }
  removePost(selectedPost) {
    this.setState((state) => ({
      posts: state.posts.filter((post) => post.id !== selectedPost.id),
    }));
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
                photos={this.state.posts}
                removePost={this.removePost}
              ></PhotoWall>
            </div>
          ))()}
        ></Route>

        <Route
          path="/addphoto"
          element={(() => (
            <AddPhoto></AddPhoto>
          ))()}
        ></Route>
      </Routes>
    );
  }
}

function getPhotos() {
  return Promise.resolve([
    {
      id: "0",
      description: "beautiful landscape",
      imageLink:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg",
    },
    {
      id: "1",
      description: "Aliens???",
      imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
    },
    {
      id: "2",
      description: "On a vacation!",
      imageLink:
        "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
    },
  ]);
}
