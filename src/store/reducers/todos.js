import types from '../types/todo';

const INITIAL_STATE = {
  data: [
    { id: 1, title: 'teste1', description: 'dec1'},
  ]
};

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.ADD_TODO:

      return {
        data: [
          ...state.data,
          action.payload,
        ]
      }
    default:
      return state;  
  }
}
