// importing toArray from to-array module
import toArray from './to-array';

// exporting and defining the default function createElement
export default function createElement(tagName, attributes, children = []) {
  // calling creatElement method of document object passing tagname argument  and assigning the return to parent
  const parent = document.createElement(tagName);
  // for in loop iterating through object attributes at key const name
  for (const name in attributes) {
    // calling setAttribute method of parent object, with 2 arguments: name and attributes[name]
    parent.setAttribute(name, attributes[name]);
  }
  //  calling toArray function with 1 argument (children) and calling forEach function on the
  // return value with 1 parameter - anonymous function with 1 parameter child
  toArray(children).forEach(child => {
    // if statement checking if (child Instanceof HTMLElement) is not true
    if (!(child instanceof HTMLElement)) {
      // calling createTextNode method of document object passing 1 argument child, and assiging the return value to variable child
      child = document.createTextNode(child);
    }
    // calling appendChild method of parent object passing 1 argument child
    parent.appendChild(child);
  });
  // returning the value stored in parent
  return parent;
}
