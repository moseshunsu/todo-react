import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export default function AddTodoForm({ onSetItems }) {
  const [description, setDescription] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current.focus();
  });

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
    setIsOpen(false);
    setDescription("");
  }

  return isOpen ? (
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
      <button>Add</button>
    </form>
  ) : (
    <button onClick={() => setIsOpen(true)}>Add Item</button>
  );
}
