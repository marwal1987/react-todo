import { useState } from "react";
import { SlPlus } from "react-icons/sl";
export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <div id="addTodo">
      <input
        placeholder="Add task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
        style={{ color: "goldenrod" }}
      >
        <SlPlus />
      </button>
    </div>
  );
}
