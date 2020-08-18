import React, { Component } from "react";
import { createPortal } from "react-dom";
import "./App.css";
import demoContent from "./demoContent";

class App extends Component {
  aa = () => {
    try {
      console.log(888);
      return 333;
    } catch (error) {
      console.log(error);
    } finally {
      console.log(777);
    }
  };

  render() {
    return <Test />;
  }
}

class Test extends Component {
  static contextType = demoContent;
  render() {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ width: 100, backgroundColor: "red", height: "100vh" }}>
          {this.context}
        </div>
        <div style={{ flex: 2, backgroundColor: "green", height: "100vh" }}>
          {this.context}
        </div>
      </div>
    );
  }
}

export default App;
