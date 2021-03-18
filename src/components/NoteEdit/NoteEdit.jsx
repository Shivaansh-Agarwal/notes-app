import React from "react";
import Pin from "../Pin";
import ColorPallete from "../ColorPallete";

const NoteEdit = ({
  title,
  setTitle,
  body,
  setBody,
  color,
  setColor,
  isNotePinned,
  setIsNotePinned,
  setEditNoteVisibility,
  togglePin,
}) => {
  return (
    <div className={`note-e-wrapper`}>
      <div className={`note-e ${color}`}>
        <header className={`note-e-title`}>
          <textarea
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            autoFocus
          ></textarea>
          <Pin
            isPinned={isNotePinned}
            setIsPinned={setIsNotePinned}
            togglePin={togglePin}
          />
        </header>
        <main className={`note-e-body`}>
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          ></textarea>
        </main>
        <footer>
          <ColorPallete setNoteColor={setColor} />
          <button
            onClick={(e) => {
              setEditNoteVisibility(false);
            }}
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NoteEdit;
