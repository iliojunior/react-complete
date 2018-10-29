import Service from './Service';

class TodoService extends Service {
  constructor() {
    super('/todos');
  }

  findTodos() {
    const { getUrl } = this;

    return this
      .$axios
      .get(getUrl);
  }
}

export default TodoService;
