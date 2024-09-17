import React, { useState } from "react";
import Note from "./Note";

function CreateArea(props) {
  const [Notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setNotes((prevValue) => {
      if (name == "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else if (name == "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }

  function createNote(event) {
    props.add(Notes);
    setNotes({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={Notes.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={Notes.content}
        />
        <button onClick={createNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
