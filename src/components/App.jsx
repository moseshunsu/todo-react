import { useState } from "react";
import TodoList from "./TodoList";

const initialTodoList = [
  { id: 1, description: "Learn coding", completed: false },
  { id: 2, description: "Eat Rice", completed: true },
  { id: 3, description: "Drink water", completed: false },
];

export default function App() {
  const [items, setItems] = useState(initialTodoList);
  // const [isCompleted, setIsCompleted] = useState(false);

  function handleAddItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div>
      <TodoList items={items} onToggleItem={handleAddItem} />

      <TodoItem />

      <AddTodoForm />
    </div>
  );

  function TodoItem() {}

  function AddTodoForm() {
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
      e.preventDefault();

      if (!description) return;

      const id = crypto.randomUUID();

      const newItem = {
        id,
        description: description,
        completed: false,
      };

      setItems((items) => [...items, newItem]);
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
          />
        </div>
        <button>Add</button>
      </form>
    );
  }
}
