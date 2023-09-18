'use client';
import { useState } from 'react';
import { useTodo } from './TodoContext.js';

export const TodoForm = () => {
  // const { addTodo } = useContext(TodoContext);
  const { addTodo } = useTodo();
  const [value, setValue] = useState('');
  const handleSumbit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  return (
    <div className="py-4">
      <form onSubmit={handleSumbit}>
        <input
          id="todo-input"
          type="text"
          placeholder="Add something todo..."
          autoComplete="off"
          value={value}
          className="block w-full rounded-lg border-2 border-gray-300 bg-gray-50 p-2 text-xl text-gray-900 focus:border-primary focus:ring-primary"
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default TodoForm;
