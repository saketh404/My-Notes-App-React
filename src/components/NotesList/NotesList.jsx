import React, { useContext } from "react";
import NotesCSS from "./NotesList.module.css";
import NoteElement from "../NoteTitle/NoteElement";
//get the context
import NotesContext from "../../context/notesContext";
function NotesList({ setView, visiblity, trigModal }) {
  function handleView() {
    setView((prev) => !prev);
  }
  const { notesGroups } = useContext(NotesContext);
  //loop over the notesGroupe array and display the noteElement
  return (
    <div className={!visiblity ? NotesCSS.toggle : NotesCSS.container}>
      <div className={NotesCSS.heading}>
        <h1>Pocket Notes</h1>
      </div>
      <div className={NotesCSS.NotesListWrapper}>
        <div className={NotesCSS.NotesList}>
          {notesGroups
            ?.map((Element) => {
              return (
                <div key={Element.epoch} onClick={handleView}>
                  <NoteElement
                    close={handleView}
                    noteId={Element?.epoch.toString()}
                    Title={Element.title}
                    color={Element.color}
                  />
                </div>
              );
            })
            .sort((a, b) => +b.key - +a.key)}
        </div>
      </div>
      <button onClick={trigModal} className={NotesCSS.addBtn}>
        +
      </button>
    </div>
  );
}

export default NotesList;
