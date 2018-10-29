import types from '../types/todo';

const buildNewTodo = (title, description) => ({
  id: Math.random(),
  title,
  description,
})

export function addTodo(title, description) {
  return {
    type: types.ADD_TODO,
    payload: buildNewTodo(title, description),
  };
}
