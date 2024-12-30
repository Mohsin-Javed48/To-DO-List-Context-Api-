/** @format */

import { useState } from "react";
import { useTodo } from "../contexts/todoContext";
import React from "react";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      setError("Todo cannot be empty.");
      return;
    }
    addTodo({ todo: todo.trim(), completed: false });
    setTodo("");
    setError("");
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        aria-label="Todo input"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0 hover:bg-green-700 focus:ring-2 focus:ring-green-300"
        aria-label="Add Todo"
      >
        Add
      </button>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </form>
  );
}

export default TodoForm;
