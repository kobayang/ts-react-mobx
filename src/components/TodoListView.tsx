import React, { Component } from "react";
import { observer } from "mobx-react";
import { Todo, TodoList } from "../stores/TodoList";

@observer
class TodoListView extends Component<{ todoList: TodoList }> {
  componentDidMount() {
    const store = this.props.todoList;
    store.todos.push(new Todo("Get Coffee"), new Todo("Write simpler code"));
    store.todos[0].finished = true;
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todoList.todos.map(todo => (
            <TodoView todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    );
  }
}

const TodoView = observer(({ todo }: { todo: Todo }) => (
  <li>
    <input type="checkbox" checked={todo.finished} onClick={() => (todo.finished = !todo.finished)} />
    {todo.title}
  </li>
));

export default TodoListView;
