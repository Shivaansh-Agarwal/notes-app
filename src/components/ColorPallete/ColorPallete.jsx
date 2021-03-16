import React from "react";

const ColorPallete = ({ setNoteColor }) => {
  function changeColor(e) {
    let color = e.target.className.split(" ")[1];
    setNoteColor(color);
    e.stopPropagation();
  }
  return (
    <div className="color-pallete-icon">
      <div className="note-btn">
        <span className="material-icons">palette</span>
      </div>
      <div className="color-pallete">
        <div className="btn-color color-default" onClick={changeColor}></div>
        <div className="btn-color color-red" onClick={changeColor}></div>
        <div className="btn-color color-orange" onClick={changeColor}></div>
        <div className="btn-color color-yellow" onClick={changeColor}></div>
        <div className="btn-color color-green" onClick={changeColor}></div>
        <div className="btn-color color-teal" onClick={changeColor}></div>
        <div className="btn-color color-blue" onClick={changeColor}></div>
        <div className="btn-color color-darkblue" onClick={changeColor}></div>
        <div className="btn-color color-purple" onClick={changeColor}></div>
        <div className="btn-color color-pink" onClick={changeColor}></div>
        <div className="btn-color color-brown" onClick={changeColor}></div>
        <div className="btn-color color-gray" onClick={changeColor}></div>
      </div>
    </div>
  );
};

export default ColorPallete;
