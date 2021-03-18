import React, { useState } from "react";
import Pin from "../Pin";
import ColorPallete from "../ColorPallete";
import NoteEdit from "../NoteEdit";
import { useNotesDetailsContext } from "../../contexts/notesDetails-context";

const NoteView = ({ id, noteTitle, noteBody, noteColor, isPinned }) => {
  const [title, setTitle] = useState(noteTitle);
  const [body, setBody] = useState(noteBody);
  const [color, setColor] = useState(noteColor);
  const [isNotePinned, setIsNotePinned] = useState(isPinned);
  const [editNoteVisibility, setEditNoteVisibility] = useState(false);
  const { notesList, setNotesList } = useNotesDetailsContext();

  function changeNoteColor(newColor) {
    setNotesList((currNotesList) => {
      const newNotesList = currNotesList.map((currNote) => {
        if (currNote.id !== id) {
          return currNote;
        } else {
          return { ...currNote, noteColor: newColor };
        }
      });
      return newNotesList;
    });
  }

  function togglePinAndUpdateList() {
    const currNote = notesList.find((note) => note.id === id);
    const newNotesList = notesList.filter((note) => note.id !== id);
    setNotesList([{ ...currNote, isPinned: !isNotePinned }, ...newNotesList]);
  }

  function openEditMode() {
    setEditNoteVisibility(true);
  }

  return (
    <div>
      <div className={`note-v ${color}`} onClick={openEditMode}>
        <header>
          <div>{title}</div>
          <Pin
            isPinned={isNotePinned}
            setIsPinned={setIsNotePinned}
            togglePin={togglePinAndUpdateList}
          />
        </header>
        <main>{body}</main>
        <footer>
          <ColorPallete
            setNoteColor={setColor}
            changeNoteColor={changeNoteColor}
          />
          <div className={`note-btn`}>
            <span className="material-icons">delete</span>
          </div>
        </footer>
      </div>
      {editNoteVisibility && (
        <NoteEdit
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          color={color}
          setColor={setColor}
          isNotePinned={isNotePinned}
          setIsNotePinned={setIsNotePinned}
          setEditNoteVisibility={setEditNoteVisibility}
          togglePin={togglePinAndUpdateList}
        />
      )}
    </div>
  );
};

export default NoteView;
