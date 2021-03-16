import React, { useState, useEffect, createContext, useContext } from "react";

export const NotesDetailsContext = createContext();

export function NotesDetailsProvider({ children }) {
  const [note, setNote] = useState({});
  const [notesList, setNotesList] = useState([]);
  const [notesListPinned, setNotesListPinned] = useState([]);

  useEffect(() => {
    if (Object.keys(note).length === 1) {
      const noteToRemove = notesList.find((currNote) => currNote.isPinned);
      const pinnedNoteToRemove = notesListPinned.find(
        (currNote) => !currNote.isPinned
      );
      if (noteToRemove) {
        const newNotesList = notesList.filter((currNote) => currNote.isPinned);
        setNotesList(newNotesList);
        setNotesListPinned((currNotes) => [noteToRemove, ...currNotes]);
      } else if (pinnedNoteToRemove) {
        const newNotesList = notesListPinned.filter(
          (currNote) => !currNote.isPinned
        );
        setNotesListPinned(newNotesList);
        setNotesList(pinnedNoteToRemove);
      }
    }
  }, [note, notesList, notesListPinned]);

  return (
    <NotesDetailsContext.Provider
      value={{
        note,
        setNote,
        notesList,
        setNotesList,
        notesListPinned,
        setNotesListPinned,
      }}
    >
      {children}
    </NotesDetailsContext.Provider>
  );
}

export function useNotesDetailsContext() {
  return useContext(NotesDetailsContext);
}
