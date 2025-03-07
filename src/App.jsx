import "./App.css";
import Header from "./Components/header/Header";
import Side from "./Components/side/Side";
import Post from "./Components/post/Post";
function App() {
  return (
    <>
      <Header />
      <div className="container ">
        <div className="row">
          <div className="col1">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div className="col2">
            <Side />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
