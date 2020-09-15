// importing { createElement } from ../lib module
import { createElement } from '../lib';

// exporting default class TodoForm
export default class TodoForm {
  // defining constructor with 1 parameter onSubmit
  constructor(onSubmit) {
    // empty string being assigned to newTask property of this object
    this.newTask = '';
    // null being assigned to newTask property of this object
    this.element = null;
    // value stored in onSubmit being assigned to newTask property of this object
    this.onSubmit = onSubmit;
    // calling the bind method of the handleChange property of this object passing in this as argument
    // and assigning the return value to handleChange property of this object
    this.handleChange = this.handleChange.bind(this);
    // calling the bind method of the handleSubmit property of this object passing in this as argument
    // and assigning the return value to handleSubmit property of this object
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // defining function handleChange with 1 parameter (event)
  handleChange(event) {
    // assigning the value stored in the value property of the target property of the event object
    // and assigning it to the newTask property of this object
    this.newTask = event.target.value;
  }

  // defining function handleSubmit with 1 parameter (event)
  handleSubmit(event) {
    // calling preventDefault method of event object
    event.preventDefault();
    // calling onsubmit method of this object with 1 parameter (this.newTask)
    this.onSubmit(this.newTask);
    // assigning empty string to newTask property of this object
    this.newTask = '';
    // calling reset method of target property of event object
    event.target.reset();
    // call chain: calling querySelector method of target property of event object passing 1 string argument
    // then calling focus method on that return value
    event.target.querySelector('input').focus();
  }

  // defining function render with 0 parameters
  render() {
    // if statement checking if (this.element) is true, return this.element if true
    if (this.element) return this.element;

    // ????

    this.element = (
      createElement('form', { class: 'shadow-sm mb-4' }, [
        createElement('div', { class: 'input-group' }, [
          createElement('input', {
            type: 'text',
            required: true,
            class: 'form-control',
            placeholder: 'What to do?'
          }),
          createElement('div', { class: 'input-group-append' }, [
            createElement('button', { type: 'submit', class: 'btn btn-primary' }, 'Add Todo')
          ])
        ])
      ])
    );

    // calling addEventListener method of element property of this object with 2 arguments (string, and this.handleChange)
    this.element.addEventListener('change', this.handleChange);
    // calling addEventListener method of element property of this object with 2 arguments (string, and this.handleSubmit)
    this.element.addEventListener('submit', this.handleSubmit);
    // returning value in element property of this object
    return this.element;
  }
}
