import { createContext, useContext, useReducer } from 'react';
import TodoReducer, { initState } from './TodoReducer.js';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from './TodoActions.js';

export const TodoContext = createContext(initState);

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initState);

  const addTodo = (todoContent) => {
    const newTodos = state.todos.concat({
      id: Math.floor(Math.random() * 100000),
      create: Date.now(),
      content: todoContent,
      complete: false,
    });
    dispatch({
      type: ADD_TODO,
      payload: {
        todos: newTodos,
      },
    });
  };

  const toggleTodo = (todoId) => {
    const newTodos = state.todos.map((todo) => {
      if (todo.id === todoId) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    dispatch({
      type: TOGGLE_TODO,
      payload: {
        todos: newTodos,
      },
    });
  };

  const deleteTodo = (todoId) => {
    const newTodos = state.todos.filter((todo) => todo.id !== todoId);
    dispatch({
      type: DELETE_TODO,
      payload: {
        todos: newTodos,
      },
    });
  };

  const value = {
    todos: state.todos,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    console.error('context error...');
  }
  return context;
};
