export default function App() {
  const initialTodoList = [
    { id: 1, description: "Learn coding", completed: false },
    { id: 2, description: "Eat Rice", completed: true },
    { id: 1, description: "Drink water", completed: false },
  ];

  return (
    <div>
      <TodoList />

      <TodoItem />

      <AddTodoForm />
    </div>
  );

  function TodoList() {}

  function TodoItem() {}

  function AddTodoForm() {}
}
