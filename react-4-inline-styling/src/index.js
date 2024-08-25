import React from "react";
import ReactDOM from "react-dom";
const customStyle = {
  color: "red",
  fontSize: "40px",
  backgroundColor: "yellow",
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
