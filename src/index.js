import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NotesDetailsProvider } from "./contexts/notesDetails-context";

ReactDOM.render(
  <React.StrictMode>
    <NotesDetailsProvider>
      <App />
    </NotesDetailsProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
