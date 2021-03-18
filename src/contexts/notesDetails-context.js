import React, { useState, createContext, useContext } from "react";

export const NotesDetailsContext = createContext();

export function NotesDetailsProvider({ children }) {
  const [notesList, setNotesList] = useState([]);

  return (
    <NotesDetailsContext.Provider
      value={{
        notesList,
        setNotesList,
      }}
    >
      {children}
    </NotesDetailsContext.Provider>
  );
}

export function useNotesDetailsContext() {
  return useContext(NotesDetailsContext);
}
