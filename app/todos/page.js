// page.js
'use client';
import { React } from 'react';
import Todos from './Todos.js';
import TodoForm from './TodoForm.js';
import { TodoProvider } from './TodoContext.js';
export default function Page() {
  return (
    <TodoProvider>
      <div className="h-screen w-screen bg-white p-4">
        <div className="mx-auto my-0 max-w-lg">
          <h1>TODO List</h1>
          <TodoForm />
          <Todos />
        </div>
      </div>
    </TodoProvider>
  );
}
