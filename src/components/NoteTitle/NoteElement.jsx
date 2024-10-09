import React from "react";
import { NavLink } from "react-router-dom";
import NoteElementCSS from "./NoteElement.module.css";
function NoteElement({ noteId, Title, close, color }) {
  //all the note group titles
  const bubbleColor = {
    backgroundColor: color,
    color: "white",
  };

  function initials(string) {
    const words = string.split(" ");
    let initials = "";
    if (words.length >= 1) {
      initials += words[0].charAt(0).toUpperCase();
      if (words.length >= 2) {
        initials += words[1].charAt(0).toUpperCase();
      }
    }
    return initials;
  }

  return (
    <NavLink
      to={noteId}
      className={({ isActive }) =>
        isActive ? `${NoteElementCSS.active} ` : `${NoteElementCSS.NoteLink} `
      }>
      <div style={bubbleColor} className={NoteElementCSS.bubble}>
        {initials(Title)}
      </div>
      <div>
        <p className={NoteElementCSS.ptag}>{Title}</p>
      </div>
    </NavLink>
  );
}

export default NoteElement;
