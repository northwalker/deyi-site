'use client';
// Todos.js

import React from 'react';
import { useTodo } from './TodoContext';
const Todos = () => {
  // const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);
  const { todos, toggleTodo, deleteTodo } = useTodo();
  return (
    <div className="py-4">
      {todos.map((item) => (
        <div key={item.id} className="text-md flex flex-row py-4">
          <div className="flex flex-auto items-center justify-start">
            <span className={item.complete ? 'line-through' : ''}>
              {item.content}
            </span>
          </div>
          <button
            className="b-green mr-2 flex h-8 w-32 items-center justify-center rounded-md bg-green-300"
            onClick={() => toggleTodo(item.id)}
          >
            {item.complete ? 'Cancel' : 'Complete'}
          </button>
          <button
            className="b-green mr-2 flex h-8 w-32 items-center justify-center rounded-md bg-pink-300"
            onClick={() => deleteTodo(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};
export default Todos;
