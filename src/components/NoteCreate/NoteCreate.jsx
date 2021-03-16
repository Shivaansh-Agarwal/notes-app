import React, { useState } from "react";
import Pin from "../Pin";
import ColorPallete from "../ColorPallete";
import COLORS from "../ColorPallete/constants";
import { useNotesDetailsContext } from "../../contexts/notesDetails-context";
import { v4 as uuidv4 } from "uuid";

const NoteCreate = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [isPinned, setIsPinned] = useState(false);
  const [noteColor, setNoteColor] = useState(COLORS.DEFAULT);
  const [isWriteModeOn, setIsWriteModeOn] = useState(false);
  const { setNotesList, setNotesListPinned } = useNotesDetailsContext();

  function getNewNote() {
    return {
      id: uuidv4(),
      noteTitle: noteTitle,
      noteBody: noteBody,
      noteColor: noteColor,
      isPinned: isPinned,
    };
  }

  function createNote() {
    if (noteTitle !== "" || noteBody !== "") {
      let note = getNewNote();
      if (isPinned) {
        setNotesListPinned((currNotesList) => {
          return [...currNotesList, note];
        });
      } else {
        setNotesList((currNotesList) => {
          return [...currNotesList, note];
        });
      }
    }
  }

  function createAndCloseWriteMode(e) {
    createNote();
    setNoteTitle("");
    setNoteBody("");
    setIsPinned(false);
    setNoteColor(COLORS.DEFAULT);
    setIsWriteModeOn(false);
  }

  return (
    <div className={`note-c ${noteColor}`}>
      {isWriteModeOn && (
        <header className={`note-c-title`}>
          <input
            type="text"
            placeholder="Title"
            value={noteTitle}
            onChange={(e) => {
              setNoteTitle(e.target.value);
            }}
          />
          <Pin isPinned={isPinned} setIsPinned={setIsPinned} />
        </header>
      )}
      <main className={`note-c-body`}>
        <input
          type="text"
          placeholder="Take a note..."
          value={noteBody}
          onChange={(e) => {
            setNoteBody(e.target.value);
          }}
          onClick={(e) => {
            setIsWriteModeOn(true);
          }}
        />
      </main>
      {isWriteModeOn && (
        <footer className="note-c-footer">
          <div className={`note-c-buttons-left`}>
            <ColorPallete setNoteColor={setNoteColor} />
            <div className={`note-btn btn-delete`}>
              <span className="material-icons">delete</span>
            </div>
          </div>
          <div className={`note-c-buttons-right`}>
            <button
              className={`note-c-btn-close`}
              onClick={createAndCloseWriteMode}
            >
              Close
            </button>
          </div>
        </footer>
      )}
    </div>
  );
};

export default NoteCreate;
