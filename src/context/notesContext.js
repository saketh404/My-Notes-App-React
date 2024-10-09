import react, { createContext } from "react";
const NotesContext = createContext();

export default NotesContext;

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
