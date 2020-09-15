// importing { createElement } from ../lib module
import { createElement } from '../lib';

// exporting default class Todolist
export default class TodoList {
  // defining constructor with 1 parameter onToggle
  constructor(onToggle) {
    // assigning value of onToggle to onToggle property of this object
    this.onToggle = onToggle;
    // calling bind method of handleChange property of this object passing 1 argument this, and assigning the return
    // to handleChange property of this object
    this.handleChange = this.handleChange.bind(this);
  }

  // defining function handleChange with 1 parameter event
  handleChange(event) {
    // calling closest method of target property of event object passing 1 argument string and assigning return value to todoItem
    const todoItem = event.target.closest('[data-todo-id]');
    // if statement checking if (todoItem) is false, if false return undefined
    if (!todoItem) return;
    // calling parseInt function with 2 arguments (getAttribute method of todoItem, with 1 argument string, and number 10 )
    // and assigning the return value to const todoiD
    const todoId = parseInt(todoItem.getAttribute('data-todo-id'), 10);
    // calling onToggle method of this object with 1 argument (todoId)
    this.onToggle(todoId);
  }

  // defining renderCheckbox function with 1 parameter todo
  renderCheckbox(todo) {
    // calling createElement function with 2 arguments, 1 string and an object, and assigning the return value to const checkbox
    const checkbox = createElement('input', {
      // property type, string value
      type: 'checkbox',
      // property id, string value
      id: `task${todo.id}`,
      // property class, string value
      class: 'form-check-input'
    });
    // assigning value in isCompleted property of todo object to checked property of checkbox object
    checkbox.checked = todo.isCompleted;
    // returning value in checkbox
    return checkbox;
  }

  // defining renderTodoItem function with 1 paremeter todo
  renderTodoItem(todo) {
    // assigning value in isCompleted property of todo object to const lavelStyle
    const labelStyle = todo.isCompleted
    // ???
      ? 'cursor: pointer; text-decoration: line-through; opacity: 0.5; font-style: italic;'
      : 'cursor: pointer; text-decoration: inherit;';
      // ?????
    const todoItem = (
      createElement('li', { class: 'list-group-item', 'data-todo-id': todo.id }, [
        createElement('div', { class: 'form-check d-flex' }, [
          this.renderCheckbox(todo),
          createElement('label', { style: labelStyle, class: 'form-check-label flex-grow-1', for: `task${todo.id}` }, todo.task)
        ])
      ])
    );
    // returning value in todoItem
    return todoItem;
  }

  // defining render function with 1 paremeter (todos)
  render(todos) {
    // ????
    const todoList = (
      createElement('ul', { class: 'list-group shadow-sm mb-4' }, todos.map(todo => {
        return this.renderTodoItem(todo);
      }))
    );
    // calling addEventListener method of todoList object with 2 arguments (string and value in handleChange property of this object)
    todoList.addEventListener('change', this.handleChange);
    // returning value in todoList
    return todoList;
  }
}
