import { useState } from "react";
import { SlPencil, SlTrash } from "react-icons/sl";

export default function TaskList({ todos, onChangeTodo, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}

function Task({ todo, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <button
          onClick={() => setIsEditing(true)}
          style={{ color: "goldenrod" }}
        >
          <SlPencil />
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          });
        }}
        style={{ backgrounColor: "red" }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)} style={{ color: "red" }}>
        <SlTrash />
      </button>
    </label>
  );
}
