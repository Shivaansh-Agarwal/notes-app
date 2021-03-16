import React, { useState } from "react";
import Pin from "../Pin";
import ColorPallete from "../ColorPallete";
import { useNotesDetailsContext } from "../../contexts/notesDetails-context";

const NoteView = ({ id, noteTitle, noteBody, noteColor, isPinned }) => {
  const [color, setColor] = useState(noteColor);
  const [isNotePinned, setIsNotePinned] = useState(isPinned);
  const {
    notesList,
    setNotesList,
    notesListPinned,
    setNotesListPinned,
  } = useNotesDetailsContext();

  function togglePin() {
    if (isNotePinned) {
      const pinnedNoteToRemove = notesListPinned.find(
        (currNote) => currNote.id === id
      );
      pinnedNoteToRemove.isPinned = false;
      const newNotesList = notesListPinned.filter(
        (currNote) => currNote.id !== id
      );
      setNotesListPinned(newNotesList);
      setNotesList([pinnedNoteToRemove, ...notesList]);
    } else {
      const noteToRemove = notesList.find((currNote) => currNote.id === id);
      noteToRemove.isPinned = true;
      const newNotesList = notesList.filter((currNote) => currNote.id !== id);
      setNotesList(newNotesList);
      setNotesListPinned([noteToRemove, ...notesListPinned]);
    }
  }
  return (
    <div className={`note-v ${color}`}>
      <header>
        <div>{noteTitle}</div>
        <Pin
          isPinned={isNotePinned}
          setIsPinned={setIsNotePinned}
          togglePin={togglePin}
        />
      </header>
      <main>{noteBody}</main>
      <footer>
        <ColorPallete setNoteColor={setColor} />
        <div className={`note-btn`}>
          <span className="material-icons">delete</span>
        </div>
      </footer>
    </div>
  );
};

export default NoteView;
