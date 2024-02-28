import { useState } from "react";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

const initialTodoList = [
  { id: 1, description: "Learn coding", completed: false },
  { id: 2, description: "Eat Rice", completed: true },
  { id: 3, description: "Drink water", completed: false },
];

export default function App() {
  const [items, setItems] = useState(initialTodoList);
  // const [isCompleted, setIsCompleted] = useState(false);

  function handleChange(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div>
      <TodoList />

      <TodoItem />

      <AddTodoForm />
    </div>
  );

  function TodoList() {
    return items.map((item) => (
      <div key={item.id}>
        <span>{item.description}</span>
        <input
          type="checkbox"
          name="comleted"
          id={item.id}
          checked={item.completed}
          onChange={() => handleChange(item.id)}
        />
        <FaEdit />
        <FaTrash />
        <FaCheckCircle />
      </div>
    ));
  }

  function TodoItem() {}

  function AddTodoForm() {}
}
