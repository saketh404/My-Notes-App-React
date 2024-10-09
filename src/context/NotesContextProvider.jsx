import React, { useReducer } from "react";
import NotesContext from "./notesContext";
//context for global state managment of the notes data

//function for the useReducer hook
//ADD_GROUP adds a new empty notes groupe to the array and saves the whole context to the local storage
//ADD_NOTE adds a note to the provied note groupe id which is epoch
function reducer(state, action) {
  switch (action.type) {
    case "ADD_GROUP":
      const updatedState = [...state, ...action.payload];
      localStorage.setItem("pocketNotes", JSON.stringify(updatedState));
      return updatedState;
    case "ADD_NOTE":
      const { epoch, newNote } = action.payload;

      const updatedGroups = state.map((group) =>
        group.epoch === +epoch
          ? { ...group, notes: [...group.notes, newNote] }
          : group
      );
      localStorage.setItem("pocketNotes", JSON.stringify(updatedGroups));
      return updatedGroups;
    default:
      return state;
  }
}

export default function NotesContextProvider({ children }) {
  //inital state of the context is loaded from the local storage and in absence an empty array is loaded
  const INITIAL_STATE = JSON.parse(localStorage.getItem("pocketNotes")) || [];
  // const INITIAL_STATE = [];
  const [notesGroups, dispatch] = useReducer(reducer, INITIAL_STATE);
  //return an context provider
  return (
    <NotesContext.Provider value={{ notesGroups, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
}

// sample data repersentation

// const sampledata = [
//   {
//     title: "sample",
//     color: "hsla(262, 92%, 76%, 1)",
//     epoch: 1702147109,
//     notes: [
//       { body: "this is 1st sample note", epoch: 1702147145 },
//       { body: "this is 2nd sample note", epoch: 1702147155 },
//     ],
//   },{
//     title: "sample 2",
//     color: "hsla(262, 92%, 76%, 1)",
//     epoch: 1702147106,
//     notes: [
//       { body: "this is 1st sample note", epoch: 1702147175 },
//       { body: "this is 2nd sample note", epoch: 1702147185 },
//     ],
//   }
// ];
