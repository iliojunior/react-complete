import { takeEvery } from 'redux-saga/effects';
import TodosService from '../../services/TodosService';

function* findTodos() {
  
  const todos = TodosService.findTodos();
  yield todos;
}

function* root() {
  yield takeEvery("TODOS_FETCH_REQUESTED", findTodos);
}

export default root;
