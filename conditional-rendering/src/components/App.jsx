import React from "react";
import Login from "./Login";
var isLoggedIn = false;

function renderConditionally() {
  return (
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
