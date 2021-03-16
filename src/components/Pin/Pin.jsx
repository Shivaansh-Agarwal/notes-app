import React from "react";
import imgPinActive from "./pin-active.svg";
import imgPinInactive from "./pin-inactive.svg";

const Pin = ({ isPinned, setIsPinned, togglePin }) => {
  function changePinStatus() {
    setIsPinned((currIsPinned) => !currIsPinned);
    if (togglePin) {
      togglePin();
    }
  }
  return (
    <div className="pin">
      <button onClick={changePinStatus}>
        <img src={isPinned ? imgPinActive : imgPinInactive} alt="pin" />
      </button>
    </div>
  );
};

export default Pin;
