import React, { Component } from "react";
import { observer } from "mobx-react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { TodoList } from "./stores/TodoList";
import TodoListView from "./components/TodoListView";

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  *:focus {
    outline: none;
  }
`;

const todoList = new TodoList();

@observer
class App extends Component<{}> {
  render() {
    return (
      <>
        <GlobalStyle />
        <Base>
          <TodoListView todoList={todoList} />
        </Base>
      </>
    );
  }
}

const Base = styled.div`
  padding: 20px 40px;
`;

export default App;
