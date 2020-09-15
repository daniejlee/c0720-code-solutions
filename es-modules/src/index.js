// importing TodoApp from ./components/todo-app module
import TodoApp from './components/todo-app';

// calling querySelector method of document object with 1 argument #app, and assigning return value to container
const container = document.querySelector('#app');
// number 4 being assigned to const nextId
const nextId = 4;
// array is being assigned to const todos
const todos = [
  // object with 3 properties and 3 values
  {
    id: 1,
    task: 'Learn to code.',
    isCompleted: false
  },
  // object with 3 properties and 3 values
  {
    id: 2,
    task: 'Build projects.',
    isCompleted: false
  },
  // object with 3 properties and 3 values
  {
    id: 3,
    task: 'Get a job.',
    isCompleted: false
  }
];

// instantiating new TodoApp object passing 4 arguments, and assigning the return value to const app
const app = new TodoApp(container, nextId, todos, newState => {
  /* eslint-disable no-console */
  console.log(newState);
  // calling log method of console object passing 1 argument(newState)
});

// calling start method of app object
app.start();
