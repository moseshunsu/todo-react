import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import Button from "./Button";

const initialTodoList = [
  { id: 1, description: "Learn coding", completed: false },
  { id: 2, description: "Eat Rice", completed: true },
  { id: 3, description: "Drink water", completed: false },
];

export default function App() {
  const [items, setItems] = useState(initialTodoList);
  const [showForm, setShowForm] = useState(false);

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

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleEditItem(id) {
    console.log(id);
  }

  function handleOpenForm() {
    setShowForm((value) => !value);
  }

  function handleCloseForm() {
    setShowForm((value) => !value);
  }

  return (
    <div>
      <TodoList
        items={items}
        onToggleItem={handleToggleItem}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
      />

      <TodoItem />

      {showForm ? (
        <AddTodoForm
          showForm={showForm}
          onSetItems={handleAddItem}
          onCloseForm={handleCloseForm}
        ></AddTodoForm>
      ) : (
        <Button onClick={handleOpenForm}>Add Item</Button>
      )}
    </div>
  );

  function TodoItem() {}
}
