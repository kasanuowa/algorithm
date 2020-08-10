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
    return this.context;
  }
}

// function App() {
//   const a = [];
//   return createPortal(
//     a.length && <div />,
//     document.getElementsByTagName("body")[0]
//   );
// }

// const Repeat = (props) => {
//   const { times, children } = props;
//   const item = [];
//   for (let index = 0; index <= times; index++) {
//     item.push(children(index));
//   }
//   return <div>{item}</div>;
// };

export default App;
