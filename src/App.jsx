import { useState } from "react";
import "./App.css";
import AddTodo from "./AddTodo.jsx";
import TaskList from "./TaskList.jsx";

const initialTodos = [
  { id: 0, title: "Style Todo-List", done: true },
  { id: 1, title: "Manage State", done: false },
  { id: 2, title: "Recap all", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <h1>ToDo-list</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
