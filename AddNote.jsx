import { useContext } from "react";
import React, { useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""})
  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  return (
    <div className="container my-3">
      <h2>Add a Note</h2>
      <form className="my-3">
        <div class="mb-3">
          <label htmlFor="title"  class="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            name="title"
            onChange={onChange}
            value={note.title}
            minLength={5} required
          />
          <div id="emailHelp" class="form-text"></div>
        </div>
        <div class="mb-3">
          <label htmlfor="description" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="description"
            name="description"
            onChange={onChange}
            value={note.description}
            minLength={5} required
          />
        </div>
        <div class="mb-3">
          <label htmlfor="tag" class="form-label">
            Tag
          </label>
          <input
            type="text"
            class="form-control"
            id="tag"
            name="tag"
            onChange={onChange}
            value={note.tag}
            minLength={5} required
          />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" class="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
