import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// get notes context
import NotesContextProvider from "./context/NotesContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotesContextProvider>
      <App />
    </NotesContextProvider>
  </React.StrictMode>
);
