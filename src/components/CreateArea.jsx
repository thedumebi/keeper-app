import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [isExtended, setExtended] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setExtended(!isExtended);
    event.preventDefault();
  }

  function extend() {
    setExtended(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExtended && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="title of note"
            value={note.title}
          />
        )}
        <textarea
          onClick={extend}
          onChange={handleChange}
          name="content"
          placeholder={isExtended ? "body of note." : "Take a note..."}
          rows={isExtended ? 3 : 1}
          value={note.content}
        />
        <Zoom in={isExtended}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
