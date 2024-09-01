//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";
let currentTime = new Date(2024, 1, 1, 19);
let hour = currentTime.getHours();
var greeting;
var customCSS = {
  color: "",
};
//Show a single h1 that says "Good morning" if between midnight and 12PM.
if (hour < 12) {
  greeting = "Good Morning";
  customCSS.color = "red";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good afternoon";
  customCSS.color = "green";
} else {
  greeting = "Good evening";
  customCSS.color = "blue";
}
ReactDOM.render(
  <div>
    <h1 style={customCSS}>{greeting}</h1>
  </div>,
  document.getElementById("root")
);
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
