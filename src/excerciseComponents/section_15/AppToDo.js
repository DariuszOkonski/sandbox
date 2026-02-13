import { Component } from 'react';
import TodoList from './TodoList';
import './AppToDo.css';

class AppToDo extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default AppToDo;
