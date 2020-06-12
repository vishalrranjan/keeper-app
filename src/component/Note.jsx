import React, { useState } from "react";
// import "./styles.css";
import "./note.style.css";

// React Hooks
function Note(props) {
  // let [count, setCount] = useState();

  // setInterval(() => {
  //   let date = new Date().toLocaleString();
  //   setCount((count = date));
  // }, 1000);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
    // console.log(name, value);
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="app">
      <div className="note">
        <form action="#">
          <input
            type="text"
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={note.content}
            onChange={handleChange}
            rows="3"
            placeholder="Take a note.."
          />
          <button className="add-button" onClick={submitNote}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Note;
