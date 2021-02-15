import React, { Component } from "react";
import Posts from "../Posts/posts";
import Pagination from "../Pagination/pagination";

class App extends Component {

  render() {
    return (
      <>
        <h1>App</h1>
        <Posts/>
        <Pagination/>
      </>
    );
  }
}

export default App;
