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

  function AddTodoForm() {}
}
