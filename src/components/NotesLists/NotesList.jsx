import React from "react";
import NoteView from "../NoteView";
import { useNotesDetailsContext } from "../../contexts/notesDetails-context";

const NotesList = () => {
  const { notesList } = useNotesDetailsContext();
  return (
    <div className={`notes-list`}>
      {notesList.map((note) => {
        return (
          <NoteView
            id={note.id}
            noteTitle={note.noteTitle}
            noteBody={note.noteBody}
            noteColor={note.noteColor}
            isPinned={note.isPinned}
            key={note.id}
          />
        );
      })}
    </div>
  );
};

export default NotesList;
