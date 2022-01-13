import React, { useState, Component } from "react";


import Navigation from "./components/navigation.js"
import TOC from "./components/toc.js"
import Subject from "./components/subject.js"


import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation name="개발 Blog"></Navigation>
        <Subject name="React" sub="2022년 1월 13일"></Subject>
        <Subject name="React" sub="2022년 1월 13일"></Subject>
        <Subject name="React" sub="2022년 1월 13일"></Subject>
      </div>
    )
  };
}


export default App;
