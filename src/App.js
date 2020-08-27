import React, { Component } from "react";
import "./App.css";
import demoContent from "./demoContent";
import { testa } from "./index";

export const testb = [4, 5, 6];

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
          {testa}
        </div>
        <div style={{ flex: 1, backgroundColor: "green", height: "100vh" }}>
          {this.context}
        </div>
        <div style={{ flex: 1 }}>
          <h1>两种类型相加，如果一边是字符串，那么都转成字符串相加</h1>
          <h1>两种类型相加，如果没有字符串，那么都转成数字相加</h1>
        </div>
        <div style={{ flex: 1 }}>
          <h1>1.两种类型比较,类型相同,比较值</h1>
          <h1>2.(基础类型)类型不同,转数字比较值</h1>
          <h1>3.(引用类型)调用valueOf然后调用toString转成基础类型,然后从回到第一步的流程</h1>
        </div>
      </div>
    );
  }
}

export default App;
