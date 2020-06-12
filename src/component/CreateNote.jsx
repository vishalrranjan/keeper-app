import React from "react";
import "./note.style.css";

function CreateNote(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    // <div className="note-app">
    <div className="notes">
      <h2>{props.title}</h2>
      <p>{props.content} </p>
      <button className="delete-button" onClick={handleClick}>
        delete
      </button>
    </div>
    // </div>
  );
}

export default CreateNote;
