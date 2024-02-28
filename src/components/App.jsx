import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

const initialTodoList = [
  { id: 1, description: "Learn coding", completed: false },
  { id: 2, description: "Eat Rice", completed: true },
  { id: 3, description: "Drink water", completed: false },
];

export default function App() {
  const [items, setItems] = useState(initialTodoList);

  function handleToggleItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div>
      <TodoList items={items} onToggleItem={handleToggleItem} />

      <TodoItem />

      <AddTodoForm onSetItems={handleAddItem} />
    </div>
  );

  function TodoItem() {}
}
