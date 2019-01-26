import { computed, observable } from "mobx";

class Todo {
  id = Math.random();
  @observable title = "";
  @observable finished = false;

  constructor(title: string) {
    this.title = title;
  }
}

class TodoList {
  @observable todos: Todo[] = [];
  @computed get unfinishedTodoCount() {
    return this.todos.filter(todo => !todo.finished).length;
  }
}

export { Todo, TodoList };
