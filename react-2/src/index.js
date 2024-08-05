import React from "react";
import ReactDOM from "react-dom";
var fname = "Kaustubh";
var lname = "Bane";
var number = 4;
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <p>My lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
