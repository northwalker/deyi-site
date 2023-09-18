import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './TodoActions.js';

export const initState = {
  todos: [],
};

const TodoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: action.payload.todos,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: action.payload.todos,
      };
    default:
      return state;
  }
};

export default TodoReducer;
