import React from "react";
import NoteCreate from "./components/NoteCreate";
import { NotesList, NotesListPinned } from "./components/NotesLists";
import NoteEdit from "./components/NoteEdit";
import { NotesDetailsProvider } from "./contexts/notesDetails-context";

function App() {
  return (
    <div className="App">
      <NotesDetailsProvider>
        <NoteCreate />
        <NotesListPinned />
        <NotesList />
        <NoteEdit />
      </NotesDetailsProvider>
    </div>
  );
}

export default App;
