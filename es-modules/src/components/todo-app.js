// importing createElement and noop from the ../lib module
// importing Todolist from ./todo-list module
// importing TodoForm from ./todo-form module

import { createElement, noop } from '../lib';
import TodoList from './todo-list';
import TodoForm from './todo-form';

// exporting and defining the default class TodoApp + opening code curly brace for the code block
export default class TodoApp {
  // defining the constructor function with 4 paramaters, and opening curly brace for the code block
  constructor(container, nextId, todos, onUpdate = noop) {
    // assigning the value in container to the container property of this object
    this.container = container;
    // assigning the value in todos to the todos property of this object
    this.todos = todos;
    // assigning the value in nextId to the nextId property of this object
    this.nextId = nextId;
    // assigning the value in todoForm to the todoForm property of this object
    this.todoForm = null;
    // assigning the value in todoList to the todoList property of this object
    this.todoList = null;
    // assigning the value in isStarted to the isStarted property of this object
    this.isStarted = false;
    // assigning the value in onUpdate to the onUpdate property of this object
    this.onUpdate = onUpdate;
    // assigning the value in addTodo to the addTodo property of this object
    this.addTodo = this.addTodo.bind(this);
    // assigning the value in toggleCompleted to the toggleCompleted property of this object
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  // defining the start function with no paramters + opening curly brace
  start() {
    // if statement checking if the condition (this.isStarted) is true, and returning undefined if true
    if (this.isStarted) return;
    // instantiating a new TodoForm, passing 1 argument(this.addTodo) and assigning the return value to the todoForm property of this object
    this.todoForm = new TodoForm(this.addTodo);
    // instantiating a new TodoList, passing 1 argument(this.toggleCompleted) and assigning the return value to the todoList property of this object
    this.todoList = new TodoList(this.toggleCompleted);
    // calling the update method of this object
    this.update();
    // assigning the boolean value true to the isStarted property of this object
    this.isStarted = true;
  }

  // defining function addTodo with 1 parameter task
  addTodo(task) {
    // the value stored in nextId property of this object is being assigned to const variable id
    const id = this.nextId;
    // boolean value false is being stored in const isCompleted
    const isCompleted = false;
    // object with 3 variables is being assigned to const newTodo
    const newTodo = { id, task, isCompleted };
    // calling concat method of the todos property, of this object, with 1 argument - newTodo, and assigning return value to todos property of this object.
    this.todos = this.todos.concat(newTodo);
    // incrementing nextId property of this object by 1
    this.nextId++;
    // calling update method of this object
    this.update();
  }

  // defining toggleCompleted function with 1 parameter todoId
  toggleCompleted(todoId) {
    // calling the map method of the todos property of this object, passing 1 argument (anonymous function with parameter todo)
    // and assigning the return value to todo property of this object
    this.todos = this.todos.map(todo => {
      // if statement checking for the condition that the value in todoId is not equal to the value of the id property of the todo object
      // if true, return the value in todo
      if (todo.id !== todoId) return todo;
      // the assign method of Object is being called with 3 parameters: empty object literal, value in todo, and object with isCompleted property with value !todo.isCompleted
      // returning the return value of that function call
      return Object.assign({}, todo, { isCompleted: !todo.isCompleted });
    });
    // calling update method of this object
    this.update();
  }

  // defining function update, no parameters
  update() {
    // assigning empty string to the innerHTML property of container property of this object
    this.container.innerHTML = '';
    // calling append method of container property, of this object, with 3 parameters
    this.container.append(
      // 1st parameter: calling function createElement with 3 arguments, a string, object, and another string
      createElement('h1', { class: 'mb-4' }, 'JS Todo'),
      // 2nd parameter: calling render method of todoForm property of this object
      this.todoForm.render(),
      // 3rd parameter: calling render method of todoList propert of this object, passing 1 argument, this.todos
      this.todoList.render(this.todos)
    );

    // destructuring nextId and todos properties of this object, and assigning them to const variables nextId and todos.
    const { nextId, todos } = this;
    // calling onUpdate method of this object passing in 1 argument, object containing nextId and todos
    this.onUpdate({ nextId, todos });
  }
}
