import React from "react";
import NoteView from "../NoteView";
import { useNotesDetailsContext } from "../../contexts/notesDetails-context";

const NotesList = () => {
  const { notesList } = useNotesDetailsContext();
  const pinnedNotes = notesList.filter((note) => note.isPinned);
  const otherNotes = notesList.filter((note) => !note.isPinned);
  return (
    <div className={`notes-list-wrapper`}>
      {pinnedNotes.length > 0 && (
        <div className={`pinned-notes`}>
          <div>Pinned Notes</div>
          <div className={`notes-list`}>
            {pinnedNotes.map((note) => {
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
        </div>
      )}

      {otherNotes.length > 0 && (
        <div className={`other-notes`}>
          <div>Other Notes</div>
          <div className={`notes-list`}>
            {otherNotes.map((note) => {
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
        </div>
      )}
    </div>
  );
};

export default NotesList;
