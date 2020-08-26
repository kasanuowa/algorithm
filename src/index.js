import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App, { testb } from "./App";
import * as serviceWorker from "./serviceWorker";
import demoContent from "./demoContent";

export const testa = () => {};
console.log(testb);

ReactDOM.render(
  <React.StrictMode>
    <demoContent.Provider value={6666}>
      <App />
    </demoContent.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
