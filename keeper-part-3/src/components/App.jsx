import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteArr, setNoteArr] = useState([]);

  function addNote(Notes) {
    setNoteArr((prevNote) => {
      return [...prevNote, Notes];
    });
  }

  function deleteNote(id) {
    setNoteArr((prevNote) => {
      return prevNote.filter((obj, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {noteArr.map((notesObj, index) => {
        return (
          <Note
            key={index}
            index={index}
            title={notesObj.title}
            content={notesObj.content}
            delete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
