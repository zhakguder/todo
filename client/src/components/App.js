import React, { Component } from "react";
import ToDos from "./ToDos.js";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui center aligned secondary segment">
          <h1 className="ui  header">todos</h1>
          <ToDos />
        </div>
      </div>
    );
  }
}

export default App;
