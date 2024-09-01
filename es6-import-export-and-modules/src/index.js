import React from "react";
import ReactDOM from "react-dom";
import pi, { douplePI, triplePI } from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{douplePI()}</li>
    <li>{triplePI()}</li>
  </ul>,
  document.getElementById("root")
);
