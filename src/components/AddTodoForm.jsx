import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({ onSetItems, onCloseForm, showForm }) {
  const [description, setDescription] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (showForm) {
      inputRef.current.focus();
    }
  }, [showForm]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const id = crypto.randomUUID();

    const newItem = {
      id,
      description: description,
      completed: false,
    };

    onSetItems(newItem);
    onCloseForm();
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ref={inputRef}
        />
      </div>
      <Button>Submit</Button>
      <Button onClick={onCloseForm}>Cancel</Button>
    </form>
  );
}
