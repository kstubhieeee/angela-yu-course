import React, { useState } from "react";

function App() {
  const [name, changeName] = useState("");
  const [headingText, setHeadingText] = useState("");
  function handleChange(event) {
    changeName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);
    event.preventDefault();
  }
  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <h1>Hello {headingText} </h1>
        <input
          type="text"
          onChange={handleChange}
          placeholder="What's your name?"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
