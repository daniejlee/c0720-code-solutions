import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    fetch('/api/todos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Fetch request has failed');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      })
      .catch(error => console.error(error));

  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    })
      .then(response => response.json())
      .then(data => {
        const updatedTodos = this.state.todos;
        updatedTodos.push(data);
        this.setState({ todos: updatedTodos });
      })
      .catch(error => {
        console.error(error);
      });
  }

  toggleCompleted(todoId) {
    const todosList = this.state.todos.slice(0);
    const selectedIndex = todosList.findIndex(arr => arr.id === todoId);
    const selectedElement = todosList[selectedIndex];
    selectedElement.isCompleted = !selectedElement.isCompleted;
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(selectedElement)
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: todosList });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
