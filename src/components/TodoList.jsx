import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

export default function TodoList({
  items,
  onToggleItem,
  onDeleteItem,
  onEditItem,
}) {
  return items.map((item) => (
    <div key={item.id}>
      <span>{item.description}</span>
      <input
        type="checkbox"
        name="comleted"
        id={item.id}
        checked={item.completed}
        onChange={() => onToggleItem(item.id)}
      />
      <FaEdit onClick={() => onEditItem(item.id)} />
      <FaTrash onClick={() => onDeleteItem(item.id)} />
      <FaCheckCircle />
    </div>
  ));
}
