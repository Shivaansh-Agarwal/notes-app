import React from "react";
import NoteCreate from "./components/NoteCreate";
import NotesList from "./components/NotesLists";

function App() {
  return (
    <div className="App">
      <NoteCreate />
      <NotesList />
    </div>
  );
}

export default App;
